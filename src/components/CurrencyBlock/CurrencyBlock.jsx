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
    <div className="container m-t-4 m-b-4">
      <div className="has-text-grey is-size-6 column has-background-grey-darker m-b-0">
        {`Обновлено: ${dayjs(`${currency[0].updated["$t"]}`).format(
          "YYYY.MM.DD HH:mm"
        )}`}
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
                className="p-t-0 p-b-0 has-text-weight-bold has-text-white-bis is-inline-block"
                style={{ height: "26px" }}
              >
                ОПТ от 500 у.е
              </label>
            </div>
          </div>
        </div>
        <div className="column">Покупка</div>
        <div className="column">Продажа</div>
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
          <a
            className="has-text-grey-light is-size-5"
            onClick={toggleMoreCurrency}
          >
            {openedMoreCurrencyState
              ? "Скрыть мульти валюты"
              : "Показать мульти валюты"}
          </a>
        </div>
      </div>

      {openedMoreCurrencyState ? (
        <React.Fragment>
          <div className="columns is-mobile has-background-grey-darker has-text-grey is-marginless">
            <div className="column is-half">
              <div className="bd-notification is-dark has-text-grey-lighter">
                <span className="is-block m-b-2">
                  Менеджер по мульти валюте
                </span>
                <span className="m-t-4">
                  <span className="icon m-r-1 align-middle">
                    <i className="fas fa-phone-alt" />
                  </span>
                  <a href="tel:0662622313" className="has-text-grey-lighter">
                    +38 (066) 262-2313
                  </a>
                </span>
              </div>
            </div>
            <div className="column is-flex is-flex-columns">
              <span className="is-block is-grow-1" />
              <span>Покупка</span>
            </div>
            <div className="column is-flex is-flex-columns">
              <span className="is-block is-grow-1" />
              <span>Продажа</span>
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
        </React.Fragment>
      ) : null}
    </div>
  );
});
