// LIBRARIES
import React from "react";
import dayjs from "dayjs";
// COMPONENTS
import { Header, CurrencyBlock, Footer, InfoLine } from "../../components";
import { ModalMap } from "./Modals";
// CONSTANTS
import { GOOGLE_TABLE_URL, INFO_LINEES } from "./constants";

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

  renderCourseUpdatedData = currency => {
    return (
      <InfoLine icon="fa-history">
        <span>
          Обновлено:&nbsp;
          {dayjs(currency).format("YYYY.MM.DD HH:mm")}
        </span>
      </InfoLine>
    );
  };

  render() {
    const {
      showMap,
      currency: { loading, currencyEntry }
    } = this.state;

    return (
      <React.Fragment>
        <Header />
        <ModalMap show={showMap} toggle={this.toggleMapModal} />
        <div className="container is-hidden-touch">
          <div className="columns m-b-2 m-t-2 m-l-0 m-r-0">
            <div className="column">
              {INFO_LINEES.map(item => (
                <InfoLine key={item.text} icon={item.icon}>
                  {item.text}
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
              <div className="is-hidden-tablet">
                <InfoLine key="fa-wallet" icon="fa-wallet">
                  {"Прием ветхих купюр с минимальной комиссией"}
                </InfoLine>
              </div>
            </div>
            <div className="column has-text-right is-hidden-mobile">
              <InfoLine key="fa-wallet" icon="fa-wallet">
                {"Прием ветхих купюр с минимальной комиссией"}
              </InfoLine>
              {loading
                ? null
                : this.renderCourseUpdatedData(
                    `${currencyEntry[0].updated["$t"]}`
                  )}
            </div>
          </div>
        </div>
        <div className="column is-hidden-desktop has-text-grey is-size-7">
          {loading
            ? null
            : `Обновлено: ${dayjs(`${currencyEntry[0].updated["$t"]}`).format(
                "YYYY.MM.DD HH:mm"
              )}`}
        </div>
        {loading ? (
          <div className="fa-2x has-text-centered m-t-5 m-b-5">
            <i className="fas fa-circle-notch fa-spin" />
          </div>
        ) : (
          <CurrencyBlock loading={loading} currency={currencyEntry} />
        )}
        <Footer />
      </React.Fragment>
    );
  }
}
