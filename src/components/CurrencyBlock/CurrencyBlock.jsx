// LIBRARIES
import React from "react";
// COMPONENTS
import { CurrencyTile } from "../CurrencyTile";

export const CurrencyBlock = React.memo(props => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="columns is-small has-background-grey-darker has-text-grey">
            <div className="column">Переключатель</div>
            <div className="column">Покупка</div>
            <div className="column">Продажа</div>
          </div>
          <CurrencyTile />
          <CurrencyTile />
        </div>
      </div>
    </div>
  );
});
