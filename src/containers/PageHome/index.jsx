// LIBRARIES
import React from "react";
import { Helmet } from "react-helmet";
// COMPONENTS
import { Header, CurrencyBlock, InfoLine } from "../../components";
import { ModalMap } from "./Modals";
// CONSTANTS
import { GOOGLE_TABLE_URL, PAGE_TITLE } from "./constants";

export class PageHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    fetch(GOOGLE_TABLE_URL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          ...this.state,
          currency: {
            loading: false,
            currencyEntry: json.feed.entry
          }
        });
      });
  }

  // handlers

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
      currency: { loading, currencyEntry }
    } = this.state;

    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{PAGE_TITLE}</title>
          <meta name="description" content={PAGE_TITLE} />
        </Helmet>
        <Header />
        <ModalMap show={showMap} toggle={this.toggleMapModal} />
        <CurrencyBlock loading={loading} currency={currencyEntry} />
        <section id="info" className="container m-t-4 m-b-4 border-top">
          <div className="columns m-b-0 m-t-4 m-l-0 m-r-0">
            <div className="column">
              <h2 className="is-size-5-touch is-size-5-desktop title has-text-grey">
                Контакты
              </h2>
              <h2 className="title is-size-6-desktop is-size-6-touch has-text-grey-lighter m-b-2">
                <span className="icon m-r-1 align-middle has-text-grey-lighter">
                  <i className="fas fa-map-marker-alt" />
                </span>
                г. Харьков, пр Науки 7
              </h2>
              <InfoLine icon="fa-subway">станция метро Научная</InfoLine>
              <InfoLine icon="fa-map-marked">
                <a
                  className="has-text-grey-light text-underline"
                  onClick={this.toggleMapModal}
                >
                  Посмотреть на карте
                </a>
              </InfoLine>
              <div className="is-flex is-justified-center is-flex-columns">
                <span className="m-b-2">
                  <span className="icon m-r-1 align-middle has-text-grey-lighter">
                    <i className="fas fa-phone-alt" />
                  </span>
                  <a href="tel:0999039003" className="has-text-grey-lighter">
                    +38 (099) 903-9003
                  </a>
                </span>
                <span className="m-b-2">
                  <span className="icon m-r-1 align-middle has-text-grey-lighter">
                    <i className="fas fa-phone-alt" />
                  </span>
                  <a href="tel:0689039003" className="has-text-grey-lighter">
                    +38 (068) 903-9003
                  </a>
                </span>
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
