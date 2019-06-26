// LIBRARIES
import React, { useState } from "react";
// COMPONENTS
import { CurrencyTile } from "../CurrencyTile";
// CONSTANTS
import {
  PUR_KEY_RETAIL,
  PUR_KEY_WHOLESALE,
  SEL_KEY_RETAIL,
  SEL_KEY_WHOLESALE,
  NAMES_CURRENCY
} from "./constants";

const getCurrency = (currency, purKey, salKey) =>
  NAMES_CURRENCY.map((name, index) => {
    return {
      name,
      pur: currency[index + 1][purKey]["$t"],
      sal: currency[index + 1][salKey]["$t"]
    };
  });

export const CurrencyBlock = React.memo(({ currency }) => {
  const [toggleState, setToggleState] = useState(true);

  function toggle() {
    setToggleState(toggleState === false ? true : false);
  }

  const tableData = toggleState
    ? getCurrency(currency, PUR_KEY_WHOLESALE, SEL_KEY_WHOLESALE)
    : getCurrency(currency, PUR_KEY_RETAIL, SEL_KEY_RETAIL);

  return (
    <div className="container">
      <div className="columns is-mobile has-background-grey-darker has-text-grey is-marginless">
        <div className="column">
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
                ОПТ
              </label>
            </div>
          </div>
        </div>
        <div className="column">Покупка</div>
        <div className="column">Продажа</div>
      </div>
      {tableData.map(item => (
        <CurrencyTile
          key={item.name}
          currency={`${item.name}/UAH`}
          purchase={item.pur}
          sale={item.sal}
        />
      ))}
    </div>
  );
});
