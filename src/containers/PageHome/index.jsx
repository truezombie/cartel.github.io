// LIBRARIES
import React from "react";
import dayjs from "dayjs";
// COMPONENTS
import { Header, CurrencyBlock, Footer, InfoLine } from "../../components";
import { ModalMap } from './Modals'
// CONSTANTS
import { GOOGLE_TABLE_URL, INFO_LINEES } from './constants'

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

  render() {
    const {
      showMap,
      currency: { loading, currencyEntry }
    } = this.state;

    return (
      <React.Fragment>
        <Header />
        <ModalMap show={showMap} toggle={this.toggleMapModal} />
        <div className="container m-t-4 m-b-4">
          <div className="columns">
            <div className="column is-10 is-offset-1 p-l-0 p-r-0 has-text-grey-lighter">
              <div className="columns">
                <div className="column">
                  {
                    INFO_LINEES.map(item => <InfoLine key={item.text} icon={item.icon}>{item.text}</InfoLine>)
                  }
                  <InfoLine icon="fa-map-marked">
                    <a
                      className="has-text-grey-light text-underline"
                      onClick={this.toggleMapModal}
                    >
                      Посмотреть на карте
                    </a>
                  </InfoLine>
                </div>
                {loading ? null : (
                  <InfoLine icon="fa-history">
                    <span>
                      Крус обновлен:&nbsp;
                      {dayjs(`${currencyEntry[0].updated["$t"]}`).format(
                        "YYYY.MM.DD HH:mm:ss"
                      )}
                    </span>
                  </InfoLine>
                )}
              </div>
            </div>
          </div>
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
