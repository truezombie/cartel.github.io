// LIBRARIES
import React from "react";

export const CurrencyTile = React.memo(props => {
  return (
    <div className="columns card is-size-4 has-background-grey-dark has-text-white-ter max-w-inherit m-b-3">
      <div className="column has-text-weight-bold">USD/UAH</div>
      <div className="column">26.5</div>
      <div className="column">26.65</div>
    </div>
  );
});
