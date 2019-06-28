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
                ОПТ от 500$
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
          from={item.name}
          to={"UAH"}
          purchase={item.pur}
          sale={item.sal}
        />
      ))}
    </div>
  );
});
