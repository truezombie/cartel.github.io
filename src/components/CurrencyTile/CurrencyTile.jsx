// LIBRARIES
import React from "react";

export const CurrencyTile = React.memo(({ purchase, from, to, sale }) => {
  return (
    <div className="columns is-mobile card is-size-3-desktop is-size-4-touch has-background-grey-dark has-text-white-bis max-w-inherit m-b-1 m-t-0 m-l-0 m-r-0">
      <div className="column is-family-monospace is-half">
        <span className="icon has-text-grey-light is-size-5 align-middle">
          <i className="fas fa-chevron-right fa-xs" />
        </span>
        <span className="has-text-weight-bold">{from}</span>&nbsp;
        <span className="has-text-grey-light">{to}</span>
      </div>
      <div className="column has-text-weight-bold">{purchase}</div>
      <div className="column has-text-weight-bold">{sale}</div>
    </div>
  );
});
