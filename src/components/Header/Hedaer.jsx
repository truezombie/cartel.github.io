// LIBRARIES
import React from 'react';
import { useTranslation } from 'react-i18next';
// COMPONENTS
import { Logo } from '../Logo';

export const Header = React.memo(props => {
  const { t } = useTranslation();

  const renderPhoneLine = phone => (
    <span key={phone}>
      <span className="icon m-r-1 align-middle has-text-grey">
        <i className="fas fa-phone-alt" />
      </span>
      <a href={`tel:${phone}`} className="has-text-grey-lighter">
        {phone}
      </a>
    </span>
  );

  return (
    <div className="has-background-black-ter" id="header">
      <div className="container is-flex is-justified-between column">
        <Logo />
        <div className="is-justified-end is-flex is-aligned-center">
          <div className="has-text-grey-lighter is-hidden-touch">
            <div>
              <span className="icon fab fa-telegram-plane m-r-1 has-text-grey" />
              <a
                className="has-text-grey-lighter text-underline"
                href={props.telegramLink}
              >
                {t('btn.telegram')}
              </a>
            </div>
            <div>
              <span className="icon fas fa-map-marker-alt m-r-1 has-text-grey" />
              <a className="has-text-grey-lighter text-underline" href="#info">
                {t('btn.location')}
              </a>
            </div>
          </div>
          <div className="m-l-4 is-flex is-justified-center is-flex-columns is-hidden-touch">
            {props.phoneNumbers.map(item => renderPhoneLine(item))}
          </div>
          <div className="field has-addons m-0 is-flex is-aligned-center is-hidden-desktop">
            <p className="control">
              <a
                className="button is-dark has-text-grey-lighter"
                href={props.telegramLink}
              >
                <span className="icon fab fa-telegram-plane m-r-1 has-text-grey m-0" />
              </a>
            </p>
            <p className="control">
              <a className="button is-dark has-text-grey-lighter" href="#info">
                <span className="icon fas fa-map-marker-alt m-r-1 has-text-grey m-0" />
              </a>
            </p>
            <p className="control">
              <a className="button is-dark has-text-grey-lighter" href="#info">
                <span className="icon fas fa-phone-alt m-r-1 has-text-grey m-0" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
