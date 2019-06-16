// LIBRARIES
import React from "react";
// COMPONENTS
import { Logo } from "../Logo";
// UTILS
import { iconTelegram } from "../../utils/icons";

export const Header = React.memo(props => {
  return (
    <div className="container">
      <nav
        className="navbar is-dark p-t-2 p-b-4 border-bottom m-t-2"
        aria-label="main navigation"
        role="navigation"
      >
        <div className="navbar-brand is-marginless is-flex-mobile is-justified-center">
          <Logo />
        </div>
        <div className="navbar-end">
          <div className="navbar-item has-text-grey-lighter is-flex-mobile is-flex-tablet is-flex-columns has-text-center-mobile is-aligned-center">
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
            <p className="control has-text-centered-mobile has-text-centered-tablet">
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
  );
});
