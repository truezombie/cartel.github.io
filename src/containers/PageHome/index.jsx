// LIBRARIES
import React from "react";
// COMPONENTS
import { Header, CurrencyBlock, Footer } from "../../components";

export class PageHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMap: false
    };
  }

  toggleMapModal = () => {
    const { showMap } = this.state;
    this.setState({
      showMap: !showMap
    });
  };

  render() {
    const { showMap } = this.state;

    return (
      <React.Fragment>
        <Header />
        <div className={showMap ? "is-active modal" : "modal"}>
          <div className="modal-background" onClick={this.toggleMapModal} />
          <div className="modal-content" style={{ minHeight: "600px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1281.9953961076137!2d36.225933458257636!3d50.011527794854295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDAwJzQxLjUiTiAzNsKwMTMnMzcuMyJF!5e0!3m2!1sru!2sua!4v1560088841427!5m2!1sru!2sua"
              frameBorder="0"
              style={{
                minWidth: "320px",
                minHeight: "500px",
                width: "100%",
                height: "500px"
              }}
            />
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={this.toggleMapModal}
          />
        </div>
        <div className="container m-t-4 m-b-4">
          <div className="columns">
            <div className="column is-10 is-offset-1 p-l-0 p-r-0 has-text-grey-lighter">
              <div className="columns">
                <div className="column">
                  <p className="m-b-2">
                    <span className="icon align-middle m-r-1">
                      <i className="fas fa-map-marker-alt" />
                    </span>
                    г. Харьков, пр Науки 7
                  </p>
                  <p className="m-b-2">
                    <span className="icon align-middle m-r-1">
                      <i className="fas fa-subway" />
                    </span>
                    метро Научная
                  </p>
                  <p>
                    <span className="icon align-middle m-r-1">
                      <i className="far fa-clock" />
                    </span>
                    Работаем 24/7
                  </p>
                  <a
                    className="has-text-grey-light text-underline"
                    onClick={this.toggleMapModal}
                  >
                    <span className="icon align-middle m-r-1">
                      <i className="fas fa-map-marked" />
                    </span>
                    Посмотреть на карте
                  </a>
                </div>
                <div className="column has-text-right">
                  <span className="icon align-middle m-r-1">
                    <i className="fas fa-history" />
                  </span>
                  Крус обновлен: 10.10.10 10:10
                </div>
              </div>
            </div>
          </div>
        </div>
        <CurrencyBlock />
        <Footer />
      </React.Fragment>
    );
  }
}
