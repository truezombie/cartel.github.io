// LIBRARIES
import React from "react";
import { Helmet } from "react-helmet";
// COMPONENTS
import { Header, CurrencyBlock, Footer, InfoLine } from "../../components";
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
        {loading ? (
          <div className="fa-2x has-text-centered m-t-5 m-b-5">
            <i className="fas fa-circle-notch fa-spin" />
          </div>
        ) : (
          <CurrencyBlock loading={loading} currency={currencyEntry} />
        )}
        <section id="info" className="container m-t-4 m-b-4 border-top">
          <div className="columns m-b-0 m-t-4 m-l-0 m-r-0">
            <div className="column">
              <h2 className="is-size-5-touch title has-text-grey-lighter is-hidden-desktop">
                Контакты
              </h2>
              <h2 className="title is-size-5-desktop is-size-6-touch has-text-grey-lighter m-b-2">
                <span className="icon m-r-1 align-middle has-text-grey-lighter">
                  <i className="fas fa-map-marker-alt" />
                </span>
                г. Харьков, пр Науки 7
              </h2>
              <InfoLine icon="fa-subway">{"станция метро Научная"}</InfoLine>
              <InfoLine icon="fa-map-marked">
                <a
                  className="has-text-grey-light text-underline"
                  onClick={this.toggleMapModal}
                >
                  Посмотреть на карте
                </a>
              </InfoLine>
            </div>
            <div className="column has-text-left-touch has-text-right-desktop">
              <h2 className="is-size-5-touch title has-text-grey-lighter is-hidden-desktop">
                Дополнительная информация
              </h2>
              <h2 className="title is-size-5-desktop is-size-6-touch has-text-grey-lighter m-b-2">
                <span className="icon m-r-1 align-middle has-text-grey-lighter">
                  <i className="fas fa-history" />
                </span>
                Работаем 24/7
              </h2>
              <InfoLine icon="fa-money-bill-wave">
                {"Прием ветхих купюр с минимальной комиссией"}
              </InfoLine>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}
