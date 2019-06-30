// LIBRARIES
import React from "react";
// COMPONENTS
import { Logo } from "../Logo";
// UTILS
import { iconTelegram } from "../../utils/icons";

export const Header = React.memo(props => {
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

  return (
    <div className="has-background-black-ter">
      <div className="container is-flex is-justified-between column">
        <Logo />
        <div className="is-flex is-justified-end">
          <div className="is-flex is-aligned-center">
            <div className="field has-addons">
              <p className="control">
                <a
                  className="button is-dark is-hidden-touch"
                  href="https://t.me/cartel_obmen"
                >
                  <span className="icon m-r-1">{iconTelegram()}</span>
                  <span>Курс валют в Telegram</span>
                </a>
                <a
                  className="button is-dark is-hidden-desktop"
                  href="https://t.me/cartel_obmen"
                >
                  <span className="icon">{iconTelegram()}</span>
                </a>
              </p>
              <p className="control">
                <a href="#info" className="button is-dark is-hidden-touch">
                  <span className="icon is-small">
                    <i className="fas fa-map-marker-alt" />
                  </span>
                  <span>Мы находимся</span>
                </a>
                <a href="#info" className="button is-dark is-hidden-desktop">
                  <span className="icon is-small">
                    <i className="fas fa-phone-alt" />
                  </span>
                  <span>Контакты</span>
                </a>
              </p>
            </div>
          </div>
          <div className="m-l-4 is-flex is-justified-center is-flex-columns is-hidden-mobile">
            {renderPhoneLine("+38 (099) 903-9003", "0999039003")}
            {renderPhoneLine("+38 (068) 903-9003", "0689039003")}
          </div>
        </div>
      </div>
    </div>
  );
});
