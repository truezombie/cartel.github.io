import React from "react";
import {
  PUR_KEY_RETAIL,
  PUR_KEY_WHOLESALE,
  SEL_KEY_RETAIL,
  SEL_KEY_WHOLESALE,
  LESS_CURRENCY,
  MORE_CURRENCY,
  DESC_KEY,
  CROSS_CURRENCY
} from "./constants";

const withCurrency = WrappedComponent => {
  class HOC extends React.Component {
    state = {
      isWholesale: true
    };

    toggleWholesale = () => {
      this.setState({
        ...this.state,
        isWholesale: !this.state.isWholesale
      });
    };

    getCurrency = (purKey, salKey, startIndex, arrayCurrNames) => {
      const { currency, loading } = this.props;

      return arrayCurrNames.map((item, index) => {
        return !loading
          ? {
              from: item.from,
              to: item.to,
              pur: currency[index + startIndex][purKey]["$t"],
              sal: currency[index + startIndex][salKey]["$t"],
              descr: currency[index + startIndex][DESC_KEY]
                ? currency[index + startIndex][DESC_KEY]["$t"]
                : undefined
            }
          : {
              from: item.from,
              to: item.to,
              pur: null,
              sal: null,
              descr: "-"
            };
      });
    };

    render() {
      const { isWholesale } = this.state;

      const lessCurrency = isWholesale
        ? this.getCurrency(
            PUR_KEY_WHOLESALE,
            SEL_KEY_WHOLESALE,
            1,
            LESS_CURRENCY
          )
        : this.getCurrency(PUR_KEY_RETAIL, SEL_KEY_RETAIL, 1, LESS_CURRENCY);

      const crossCurrency = isWholesale
        ? this.getCurrency(
            PUR_KEY_WHOLESALE,
            SEL_KEY_WHOLESALE,
            6,
            CROSS_CURRENCY
          )
        : this.getCurrency(PUR_KEY_RETAIL, SEL_KEY_RETAIL, 6, CROSS_CURRENCY);

      const currencyDataAdditional = this.getCurrency(
        PUR_KEY_WHOLESALE,
        SEL_KEY_WHOLESALE,
        10,
        MORE_CURRENCY
      );

      const currencyDataMain = [...lessCurrency, ...crossCurrency];

      return (
        <WrappedComponent
          {...this.props}
          toggleWholesale={this.toggleWholesale}
          isWholesale={isWholesale}
          currencyDataMain={currencyDataMain}
          currencyDataAdditional={currencyDataAdditional}
        />
      );
    }
  }

  return HOC;
};

export default withCurrency;
