import React from "react";
import { LESS_CURRENCY, MORE_CURRENCY, CROSS_CURRENCY } from "./constants";
import { CITIES } from "../../containers/PageHome/constants";

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
      const { currency, loading, city } = this.props;
      const currentCity = CITIES[city];

      return arrayCurrNames.map((item, index) => {
        return !loading
          ? {
              from: item.from,
              to: item.to,
              pur: currency[index + startIndex][purKey]["$t"],
              sal: currency[index + startIndex][salKey]["$t"],
              descr: currency[index + startIndex][currentCity.deskKey]
                ? currency[index + startIndex][currentCity.deskKey]["$t"]
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
      const { city } = this.props;

      const currentCity = CITIES[city];

      const lessCurrency = isWholesale
        ? this.getCurrency(
            currentCity.purKeyWhosale,
            currentCity.selKeyWhosale,
            1,
            LESS_CURRENCY
          )
        : this.getCurrency(
            currentCity.purKeyRetail,
            currentCity.selKeyRetail,
            1,
            LESS_CURRENCY
          );

      const crossCurrency = isWholesale
        ? this.getCurrency(
            currentCity.purKeyWhosale,
            currentCity.selKeyWhosale,
            6,
            CROSS_CURRENCY
          )
        : this.getCurrency(
            currentCity.purKeyRetail,
            currentCity.selKeyRetail,
            6,
            CROSS_CURRENCY
          );

      const currencyDataAdditional = this.getCurrency(
        currentCity.purKeyWhosale,
        currentCity.selKeyWhosale,
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
