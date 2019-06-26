// LIBRARIES
import React, { useState } from "react";
// COMPONENTS
import { Logo } from "../Logo";
import { ModalWindow } from "../ModalWindow";
// UTILS
import { iconTelegram } from "../../utils/icons";

export const Header = React.memo(props => {
  const [btnPhoneState, setBtnPhoneState] = useState(false);

  function toggleBtnPhone() {
    setBtnPhoneState(btnPhoneState === false ? true : false);
  }

  const renderPhoneLine = (phoneLong, phoneShort) => (
    <span>
      <span className="icon m-r-1 align-middle has-text-grey-lighter">
        <i className="fas fa-phone-alt" />
      </span>
      <a href={`tel:${phoneShort}`} className="has-text-grey-lighter">
        {phoneLong}
      </a>
    </span>
  );

  const renderModalWindows = () => [
    <ModalWindow
      key="modal-phones"
      show={btnPhoneState}
      toggle={toggleBtnPhone}
      modalBody={
        <div>
          <div className="is-flex is-justified-center is-flex-columns m-r-4">
            {renderPhoneLine("+38 (099) 903-9003", "0999039003")}
            {renderPhoneLine("+38 (068) 903-9003", "0689039003")}
          </div>
        </div>
      }
    />
  ];

  return (
    <div className="has-background-black-ter">
      {renderModalWindows()}
      <div className="container is-flex is-justified-between column">
        <Logo />
        <div className="is-flex is-pulled-right is-hidden-touch">
          <div className="is-flex is-justified-center is-flex-columns m-r-4">
            {renderPhoneLine("+38 (099) 903-9003", "0999039003")}
            {renderPhoneLine("+38 (068) 903-9003", "0689039003")}
          </div>
          <div className="is-flex is-aligned-center">
            <a
              className="bd-tw-button button is-light"
              href="https://t.me/cartel_obmen"
            >
              <span className="icon m-r-1">{iconTelegram()}</span>
              <span>Следить за курсом в Telegram</span>
            </a>
          </div>
        </div>

        <div className="field has-addons is-flex is-aligned-center is-hidden-desktop">
          <p className="control">
            <a
              className="bd-tw-button button is-light is-dark is-medium"
              onClick={toggleBtnPhone}
            >
              <span className="icon">
                <i className="fas fa-phone-alt" />
              </span>
            </a>
          </p>
          <p className="control">
            <a className="bd-tw-button button is-light is-dark is-medium">
              <span className="icon">
                <i className="fas fa-map-marker-alt" />
              </span>
            </a>
          </p>
          <p className="control">
            <a className="bd-tw-button button is-light is-dark is-medium">
              <span className="icon">
                <i className="fas fa-info" />
              </span>
            </a>
          </p>
          <p className="control">
            <a
              href="https://t.me/cartel_obmen"
              className="bd-tw-button button is-light is-dark is-medium"
            >
              <span className="icon ">{iconTelegram()}</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
});
