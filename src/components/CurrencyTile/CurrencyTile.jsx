// LIBRARIES
import React from "react";

export const CurrencyTile = React.memo(({ purchase, currency, sale }) => {
  return (
    <div className="columns is-mobile card is-size-4 has-background-grey-dark has-text-white-bis max-w-inherit m-b-1 m-t-0 m-l-0 m-r-0">
      <div className="column has-text-weight-bold">{currency}</div>
      <div className="column">{purchase}</div>
      <div className="column">{sale}</div>
    </div>
  );
});
