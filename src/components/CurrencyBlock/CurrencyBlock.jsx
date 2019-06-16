// LIBRARIES
import React from "react";
// COMPONENTS
import { CurrencyTile } from "../CurrencyTile";

const NAME_CURRENCY = "gsx$_cn6ca";
const NAME_PURCHASE = "gsx$_cokwr";
const NAME_SALE = "gsx$_cpzh4";

export const CurrencyBlock = React.memo(({ currency }) => {
  return (
    <div className="container">
      <div className="columns is-mobile has-background-grey-darker has-text-grey is-marginless">
        <div className="column" />
        <div className="column">Покупка</div>
        <div className="column">Продажа</div>
      </div>
      {currency.map(item => (
        <CurrencyTile
          key={item[NAME_CURRENCY]["$t"]}
          currency={`${item[NAME_CURRENCY]["$t"]}/UAH`}
          purchase={item[NAME_PURCHASE]["$t"]}
          sale={item[NAME_SALE]["$t"]}
        />
      ))}
    </div>
  );
});
