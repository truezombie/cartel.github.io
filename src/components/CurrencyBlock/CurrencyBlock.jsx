// LIBRARIES
import React, { useState } from "react";
import dayjs from "dayjs";
// COMPONENTS
import { CurrencyTile } from "../CurrencyTile";
// CONSTANTS
import {
  PUR_KEY_RETAIL,
  PUR_KEY_WHOLESALE,
  SEL_KEY_RETAIL,
  SEL_KEY_WHOLESALE,
  LESS_CURRENCY,
  MORE_CURRENCY,
  DESC_KEY,
  CROSS_CURRENCY
} from "./constants";
// UTILS
import { getCurrency } from "./utils";

export const CurrencyBlock = React.memo(({ currency }) => {
  const [toggleState, setToggleState] = useState(true);
  const [openedMoreCurrencyState, setToggleOpenedMoreCurrency] = useState(
    false
  );

  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
  };

  const toggleMoreCurrency = () => {
    setToggleOpenedMoreCurrency(
      openedMoreCurrencyState === false ? true : false
    );
  };

  const lessCurrency = toggleState
    ? getCurrency(
        currency,
        PUR_KEY_WHOLESALE,
        SEL_KEY_WHOLESALE,
        DESC_KEY,
        1,
        LESS_CURRENCY
      )
    : getCurrency(
        currency,
        PUR_KEY_RETAIL,
        SEL_KEY_RETAIL,
        DESC_KEY,
        1,
        LESS_CURRENCY
      );

  const crossCurrency = toggleState
    ? getCurrency(
        currency,
        PUR_KEY_WHOLESALE,
        SEL_KEY_WHOLESALE,
        DESC_KEY,
        6,
        CROSS_CURRENCY
      )
    : getCurrency(
        currency,
        PUR_KEY_RETAIL,
        SEL_KEY_RETAIL,
        DESC_KEY,
        6,
        CROSS_CURRENCY
      );

  const moreCurrency = getCurrency(
    currency,
    PUR_KEY_WHOLESALE,
    SEL_KEY_WHOLESALE,
    DESC_KEY,
    10,
    MORE_CURRENCY
  );

  const tableData = [...lessCurrency, ...crossCurrency];

  return (
    <div className="container m-b-4">
      <div className="columns is-mobile m-t-0 m-l-0 m-r-0 m-b-0 has-text-white-bis">
        <div className="column">
          <div className="has-text-grey is-size-6 has-background-grey-darker m-b-0 is-size-7-mobile">
            <span className="align-sub">
              <span className="is-hidden-mobile ">Обновлено:&nbsp;</span>
              {`${dayjs(`${currency[0].updated["$t"]}`).format(
                "YYYY.MM.DD HH:mm"
              )}`}
            </span>
          </div>
        </div>
        <div className="column has-text-right is-three-fifths">
          <span className="icon m-r-1 align-middle has-text-grey-lighter">
            <i className="fas fa-history" />
          </span>
          Работаем 24/7
        </div>
      </div>

      <div className="columns is-mobile has-background-grey-darker has-text-grey is-marginless">
        <div className="column is-half">
          <div className="bd-notification is-dark">
            <div className="field is-inline-block" style={{ height: "26px" }}>
              <input
                id="switchRoundedInfo"
                type="checkbox"
                name="switchRoundedInfo"
                className="switch is-rounded is-link"
                checked={toggleState}
                readOnly
              />
              <label
                htmlFor="switchRoundedInfo"
                onClick={toggle}
                className="p-t-0 p-b-0 has-text-weight-bold has-text-white-bis is-inline-block is-size-7-mobile"
                style={{ height: "26px" }}
              >
                <span style={{ lineHeight: "26px" }} className="align-sub">
                  {toggleState ? "ОПТ от 500$" : "Розница"}
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="column is-flex is-flex-columns">
          <span className="is-block is-grow-1" />
          <span className="is-size-7-mobile">Покупка</span>
        </div>
        <div className="column is-flex is-flex-columns">
          <span className="is-block is-grow-1" />
          <span className="is-size-7-mobile">Продажа</span>
        </div>
      </div>
      {tableData.map(item => (
        <CurrencyTile
          key={item.from + item.to}
          from={item.from}
          to={item.to}
          purchase={item.pur}
          sale={item.sal}
          descr={item.descr}
        />
      ))}

      <div className="column m-t-4">
        <div className="has-text-centered">
          <span className="icon has-text-link">
            {openedMoreCurrencyState ? (
              <i className="fas fa-chevron-up" />
            ) : (
              <i className="fas fa-chevron-down" />
            )}
          </span>
          <a
            className="has-text-grey-light is-size-5"
            onClick={toggleMoreCurrency}
          >
            {openedMoreCurrencyState
              ? "Скрыть другие валюты"
              : "Показать другие валюты"}
          </a>
        </div>
      </div>

      {openedMoreCurrencyState ? (
        <div>
          <div className="box bd-notification is-dark has-text-grey-lighter has-background-black-ter is-radiusless">
            <span className="m-t-4">
              <span className="icon m-r-1 align-middle">
                <i className="fas fa-phone-alt" />
              </span>
              <a href="tel:0662622313" className="has-text-grey-lighter">
                +38 (066) 262-2313
              </a>
            </span>
            <span className="m-b-1"> - менеджер по мульти валюте</span>
          </div>
          <div className="columns is-mobile has-background-grey-darker has-text-grey is-marginless">
            <div className="column is-half" />
            <div className="column is-flex is-flex-columns">
              <span className="is-block is-grow-1" />
              <span className="is-size-7-mobile">Покупка</span>
            </div>
            <div className="column is-flex is-flex-columns">
              <span className="is-block is-grow-1" />
              <span className="is-size-7-mobile">Продажа</span>
            </div>
          </div>
          {moreCurrency.map(item => (
            <CurrencyTile
              key={item.from + item.to}
              from={item.from}
              to={item.to}
              purchase={item.pur}
              sale={item.sal}
              descr={item.descr}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
});
