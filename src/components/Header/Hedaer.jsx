// LIBRARIES
import React from "react";
// COMPONENTS
import { Logo } from "../Logo";
// UTILS
import { iconTelegram } from "../../utils/icons";

export const Header = React.memo(props => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1 border-bottom p-l-0 p-r-0">
          <nav
            className="navbar is-dark p-t-2 p-b-2"
            aria-label="main navigation"
            role="navigation"
          >
            <div className="navbar-brand">
              <Logo />
            </div>
            <div className="navbar-end">
              <div className="navbar-item flex-column">
                <span>
                  <span className="icon m-r-1 align-middle">
                    <i className="fas fa-phone-alt" />
                  </span>
                  +38 (099) 903-9003
                </span>
                <span>
                  <span className="icon m-r-1 align-middle">
                    <i className="fas fa-phone-alt" />
                  </span>
                  +38 (068) 903-9003
                </span>
              </div>
              <div className="navbar-item p-r-0">
                <p className="control">
                  <a
                    className="bd-tw-button button is-light"
                    href="https://t.me/cartel_obmen"
                  >
                    <span className="icon m-r-1">{iconTelegram()}</span>
                    <span>Следи за курсом в Telegram</span>
                  </a>
                </p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
});
