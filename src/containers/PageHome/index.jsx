// LIBRARIES
import React from "react";
import { Helmet } from "react-helmet";
// COMPONENTS
import {
  Header,
  CurrencyBlock,
  InfoLine,
  ErrorBoundary
} from "../../components";
import { ModalMap } from "./Modals";
// CONSTANTS
import { PAGE_TITLE, CITY_KEYS, CITIES } from "./constants";

export class PageHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: CITY_KEYS.kharkiv,
      showMap: false,
      currency: {
        loading: true,
        currencyEntry: []
      }
    };
  }

  // life

  componentDidMount() {
    this.getCurrencyData();
  }

  // get

  getCurrencyData() {
    const { city } = this.state;

    fetch(CITIES[city].tableUrl)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          ...this.state,
          currency: {
            ...this.state.currency,
            loading: false,
            currencyEntry: json.feed.entry
          }
        });
      });
  }

  // handlers

  onChangeCity = city => {
    this.setState(
      {
        ...this.state,
        currency: {
          ...this.state.currency,
          loading: true
        }
      },
      () => {
        fetch(CITIES[city].tableUrl)
          .then(response => {
            return response.json();
          })
          .then(json => {
            this.setState({
              ...this.state,
              city,
              currency: {
                ...this.state.currency,
                loading: false,
                currencyEntry: json.feed.entry
              }
            });
          });
      }
    );
  };

  toggleMapModal = () => {
    const { showMap } = this.state;

    this.setState({
      ...this.state,
      showMap: !showMap
    });
  };

  // render

  render() {
    const {
      showMap,
      city,
      currency: { loading, currencyEntry }
    } = this.state;

    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{PAGE_TITLE}</title>
          <meta name="description" content={PAGE_TITLE} />
        </Helmet>
        <Header phoneNumbers={CITIES[city].phoneNumbers} />
        <ModalMap
          mapUrl={CITIES[city].googleMap}
          show={showMap}
          toggle={this.toggleMapModal}
        />
        <ErrorBoundary>
          <CurrencyBlock
            loading={loading}
            currency={currencyEntry}
            city={city}
            onChangeCity={this.onChangeCity}
          />
        </ErrorBoundary>
        <section id="info" className="container m-t-4 m-b-4 border-top">
          <div className="columns m-b-0 m-t-4 m-l-0 m-r-0">
            <div className="column">
              <h2 className="is-size-5-touch is-size-5-desktop title has-text-grey">
                Контакты
              </h2>
              {CITIES[city].cityInfo.map(item => (
                <InfoLine key={item.label} icon={item.icon}>
                  {item.label}
                </InfoLine>
              ))}
              <InfoLine icon="fa-map-marked">
                <a
                  className="has-text-grey-light text-underline"
                  onClick={this.toggleMapModal}
                >
                  Посмотреть на карте
                </a>
              </InfoLine>
              <div className="is-flex is-justified-center is-flex-columns">
                {CITIES[city].phoneNumbers.map(item => (
                  <span key={item} className="m-b-2">
                    <span className="icon m-r-1 align-middle has-text-grey-lighter">
                      <i className="fas fa-phone-alt" />
                    </span>
                    <a href={`tel:${item}`} className="has-text-grey-lighter">
                      {item}
                    </a>
                  </span>
                ))}
              </div>
            </div>
            <div className="column has-text-left-touch has-text-right-desktop">
              <h2 className="is-size-5-touch is-size-5-desktop title has-text-grey">
                Дополнительная информация
              </h2>
              <h2 className="title is-size-6-desktop is-size-6-touch has-text-grey-lighter m-b-2">
                <span className="icon m-r-1 align-middle has-text-grey-lighter">
                  <i className="fas fa-history" />
                </span>
                Работаем 24/7
              </h2>
              <InfoLine icon="fa-coins">{"Принимаем монеты"}</InfoLine>
              <InfoLine icon="fa-money-bill-wave">
                {"Принимаем ветхие купюры с минимальной комиссией"}
              </InfoLine>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
