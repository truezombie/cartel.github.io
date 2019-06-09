// LIBRARIES
import React from "react";

export const CurrencyTile = React.memo(({ purchase, currency, sale }) => {
  return (
    <div className="columns card is-size-4 has-background-grey-dark has-text-white-ter max-w-inherit m-b-3">
      <div className="column has-text-weight-bold">{currency}</div>
      <div className="column">{purchase}</div>
      <div className="column">{sale}</div>
    </div>
  );
});
