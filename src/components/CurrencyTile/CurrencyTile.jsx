// LIBRARIES
import React from "react";

export const CurrencyTile = React.memo(
  ({ purchase, from, to, sale, descr, loading }) => {
    const getCurrencyValue = value =>
      loading ? (
        <i className="fas fa-circle-notch fa-spin has-text-grey" />
      ) : (
        String(value).replace(/,/gi, ".")
      );

    return (
      <div className="columns is-mobile card is-size-3-desktop is-size-5-touch has-background-grey-dark has-text-white-bis max-w-inherit is-marginless box-hover">
        <div className="column is-half is-family-monospace is-inline-flex is-aligned-center">
          <div
            className={`currency-flag m-r-1 currency-flag-${from.toLowerCase()}`}
          />
          <span
            className={`has-text-weight-semibold ${
              descr ? "is-tooltip-link tooltip" : null
            }`}
            data-tooltip={descr}
          >
            {from}
          </span>
          &nbsp;
          <span className="has-text-grey-light is-inline-flex is-aligned-center has-text-weight-semibold">
            <div
              className={`currency-flag m-r-1 currency-flag-${to.toLowerCase()}`}
            />
            {to}
          </span>
        </div>
        <div className="column has-text-weight-semibold">
          {getCurrencyValue(purchase)}
        </div>
        <div className="column has-text-weight-semibold">
          {getCurrencyValue(sale)}
        </div>
      </div>
    );
  }
);
