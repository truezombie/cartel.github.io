// LIBRARIES
import React, { useState } from "react";
import dayjs from "dayjs";
// COMPONENTS
import { CurrencyTile } from "../CurrencyTile";
import { Toggler } from "../Toggler";
// HOC
import withCurrency from "./withCurrency";

const CurrencyBlock = ({
  currency,
  loading,
  toggleWholesale,
  isWholesale,
  currencyDataMain,
  currencyDataAdditional
}) => {
  const [openedMoreCurrencyState, setToggleOpenedMoreCurrency] = useState(
    false
  );

  const toggleMoreCurrency = () => {
    setToggleOpenedMoreCurrency(
      openedMoreCurrencyState === false ? true : false
    );
  };

  const updatedMsg =
    currency[0] && currency[0].updated["$t"]
      ? dayjs(`${currency[0].updated["$t"]}`).format("YYYY.MM.DD HH:mm")
      : "-";

  return (
    <div className="container m-b-4">
      <div className="columns is-mobile m-t-0 m-l-0 m-r-0 m-b-0 has-text-white-bis">
        <div className="column">
          <div className="has-text-grey is-size-6 has-background-grey-darker m-b-0 is-size-7-mobile">
            <span className="align-sub">
              <span className="is-hidden-mobile ">Обновлено:&nbsp;</span>
              {updatedMsg}
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
                class="switch"
                checked={isWholesale}
                readOnly
              />
              <label
                htmlFor="switchRoundedInfo"
                onClick={toggleWholesale}
                className="p-t-0 p-b-0 has-text-weight-bold has-text-white-bis is-inline-block is-size-7-mobile"
                style={{ height: "26px" }}
              >
                <span style={{ lineHeight: "26px" }} className="align-sub">
                  {isWholesale ? "ОПТ от 500$" : "Розница"}
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
      <div className="border-wrapper">
        {currencyDataMain.map(item => (
          <CurrencyTile
            key={item.from + item.to}
            from={item.from}
            to={item.to}
            purchase={item.pur}
            sale={item.sal}
            descr={item.descr}
            loading={loading}
          />
        ))}
      </div>

      <Toggler
        messageOpen="Скрыть другие валюты"
        messageClose="Показать другие валюты"
        isOpen={openedMoreCurrencyState}
        onToggle={toggleMoreCurrency}
      />

      {openedMoreCurrencyState ? (
        <div>
          <div className="box bd-notification is-dark has-text-grey-lighter has-background-black-ter is-radiusless border-wrapper">
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
          <div className="border-wrapper">
            {currencyDataAdditional.map(item => (
              <CurrencyTile
                key={item.from + item.to}
                from={item.from}
                to={item.to}
                purchase={item.pur}
                sale={item.sal}
                descr={item.descr}
                loading={loading}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default withCurrency(CurrencyBlock);
