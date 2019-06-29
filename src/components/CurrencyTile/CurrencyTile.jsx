// LIBRARIES
import React from "react";

export const CurrencyTile = React.memo(
  ({ purchase, from, to, sale, descr }) => {
    return (
      <div className="columns is-mobile card is-size-4-desktop is-size-5-touch has-background-grey-dark has-text-white-bis max-w-inherit m-b-1 m-t-0 m-l-0 m-r-0">
        <div className="column is-half is-family-monospace">
          <span className="icon has-text-grey-light is-size-5 align-middle">
            <i className="fas fa-chevron-right fa-xs" />
          </span>
          <span
            className={`has-text-weight-bold ${
              descr ? "is-tooltip-link tooltip" : null
            }`}
            data-tooltip={descr}
          >
            {from}
          </span>
          &nbsp;
          <span className="has-text-grey-light">{to}</span>
        </div>
        <div className="column">{purchase}</div>
        <div className="column">{sale}</div>
      </div>
    );
  }
);
