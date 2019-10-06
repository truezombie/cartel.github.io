// LIBRARIES
import React from "react";

export const CurrencyTile = React.memo(
  ({ purchase, from, to, sale, descr, loading }) => {
    const getCurrencyValue = value =>
      loading ? <i className="fas fa-spinner fa-pulse has-text-grey" /> : value;

    return (
      <div className="columns is-mobile card is-size-4-desktop is-size-5-touch has-background-grey-dark has-text-white-bis max-w-inherit m-b-1 m-t-0 m-l-0 m-r-0">
        <div className="column is-half is-family-monospace is-inline-flex is-aligned-center">
          <div
            className={`currency-flag m-r-1 currency-flag-${from.toLowerCase()}`}
          />
          <span
            className={`has-text-weight-bold ${
              descr ? "is-tooltip-link tooltip" : null
            }`}
            data-tooltip={descr}
          >
            {from}
          </span>
          &nbsp;
          <span className="has-text-grey-light is-inline-flex is-aligned-center">
            <div
              className={`currency-flag m-r-1 currency-flag-${to.toLowerCase()}`}
            />
            {to}
          </span>
        </div>
        <div className="column">{getCurrencyValue(purchase)}</div>
        <div className="column">{getCurrencyValue(sale)}</div>
      </div>
    );
  }
);
