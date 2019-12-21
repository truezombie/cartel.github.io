// LIBRARIES
import React, { useState } from 'react';
import dayjs from 'dayjs';
// COMPONENTS
import { CurrencyTile } from '../CurrencyTile';
import { Toggler } from '../Toggler';
// HOC
import withCurrency from './withCurrency';
// CONSTANTS
import { CITY_KEYS, CITIES } from '../../containers/PageHome/constants';

const CurrencyBlock = ({
  city,
  onChangeCity,
  currency,
  loading,
  toggleWholesale,
  isWholesale,
  currencyDataMain,
  currencyDataAdditional
}) => {
  const [openedMoreCurrencyState, setToggleOpenedMoreCurrency] = useState(
    false
  );

  const toggleMoreCurrency = () => {
    setToggleOpenedMoreCurrency(
      openedMoreCurrencyState === false ? true : false
    );
  };

  const updatedMsg =
    currency[0] && currency[0].updated['$t']
      ? dayjs(`${currency[0].updated['$t']}`).format('YYYY.MM.DD HH:mm')
      : '-';

  return (
    <div className="container m-b-4">
      <div className="columns is-mobile m-t-0 m-l-0 m-r-0 m-b-0 has-text-white-bis border-bottom">
        <div className="column">
          {Object.values(CITY_KEYS).map(item => (
            <div key={item} className="field is-size-7-mobile">
              <input
                className="is-checkradio is-white"
                id="exampleRadioDefault"
                type="radio"
                name="exampleRadioDefault"
                checked={city === item}
                readOnly
              />
              <label
                htmlFor="exampleRadioDefault"
                onClick={() => onChangeCity(item)}
              >
                {CITIES[item].title}
              </label>
            </div>
          ))}
        </div>
        <div className="column has-text-right is-three-fifths">
          <div className="m-b-3">
            <span className="icon m-r-1 align-middle has-text-grey-lighter">
              <i className="fas fa-history" />
            </span>
            Работаем 24/7
          </div>
          <div className="has-text-grey is-size-6 has-background-grey-darker m-b-0 is-size-7-mobile">
            <span className="align-sub">
              <span className="is-hidden-mobile ">Обновлено:&nbsp;</span>
              {updatedMsg}
            </span>
          </div>
        </div>
      </div>

      <div className="columns is-mobile has-background-grey-darker has-text-grey is-marginless">
        <div className="column is-half">
          <div className="bd-notification is-dark">
            <div className="field is-size-7-mobile">
              <input
                className="is-checkradio is-white"
                id="exampleCheckboxWhite"
                type="checkbox"
                name="exampleCheckboxWhite"
                checked={isWholesale}
                readOnly
              />
              <label
                htmlFor="exampleCheckboxWhite"
                className="has-text-white"
                onClick={toggleWholesale}
              >
                {isWholesale ? 'ОПТ от 500$' : 'Розница'}
              </label>
            </div>
          </div>
        </div>
        <div className="column is-flex is-aligned-center">
          <span className="is-size-7-mobile">Покупка</span>
        </div>
        <div className="column is-flex is-aligned-center">
          <span className="is-size-7-mobile">Продажа</span>
        </div>
      </div>
      <div className="border-wrapper">
        {currencyDataMain.map(item => (
          <CurrencyTile
            key={item.from + item.to}
            from={item.from}
            to={item.to}
            purchase={item.pur}
            sale={item.sal}
            descr={item.descr}
            loading={loading}
          />
        ))}
      </div>

      <Toggler
        messageOpen="Скрыть другие валюты"
        messageClose="Показать другие валюты"
        isOpen={openedMoreCurrencyState}
        onToggle={toggleMoreCurrency}
      />

      {openedMoreCurrencyState ? (
        <div>
          <div className="box bd-notification is-dark has-text-grey-lighter has-background-black-ter is-radiusless border-wrapper">
            <span className="m-t-4">
              <span className="icon m-r-1 align-middle">
                <i className="fas fa-phone-alt" />
              </span>
              <a href="tel:0662622313" className="has-text-grey-lighter">
                +38 (066) 262-2313
              </a>
            </span>
            <span className="m-b-1"> - менеджер по мульти валюте</span>
          </div>
          <div className="columns is-mobile has-background-grey-darker has-text-grey is-marginless">
            <div className="column is-half" />
            <div className="column is-flex is-aligned-center">
              <span className="is-size-7-mobile">Покупка</span>
            </div>
            <div className="column is-flex is-aligned-center">
              <span className="is-size-7-mobile">Продажа</span>
            </div>
          </div>
          <div className="border-wrapper">
            {currencyDataAdditional.map(item => (
              <CurrencyTile
                key={item.from + item.to}
                from={item.from}
                to={item.to}
                purchase={item.pur}
                sale={item.sal}
                descr={item.descr}
                loading={loading}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default withCurrency(CurrencyBlock);
