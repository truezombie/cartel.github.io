// LIBRARIES
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
// COMPONENTS
import { CurrencyTile } from '../CurrencyTile';
import { Toggler } from '../Toggler';
// HOC
import withCurrency from './withCurrency';
// CONSTANTS
import { CITY_KEYS } from '../../containers/PageHome/constants';

const CurrencyBlock = ({
  city,
  onChangeCity,
  onChangeLanguage,
  currency,
  loading,
  toggleWholesale,
  isWholesale,
  currencyDataMain,
  currencyDataAdditional,
  citesTranslates
}) => {
  const [openedMoreCurrencyState, setToggleOpenedMoreCurrency] = useState(
    false
  );
  const {
    t,
    i18n: {
      language,
      store: { data }
    }
  } = useTranslation();

  const languages = Object.keys(data);

  const toggleMoreCurrency = () => {
    setToggleOpenedMoreCurrency(
      openedMoreCurrencyState === false ? true : false
    );
  };

  const updatedMsg =
    currency[0] && currency[0].updated['$t']
      ? dayjs(`${currency[0].updated['$t']}`).format('YYYY.MM.DD HH:mm')
      : '-';

  const currencyTableHeader = () => {
    return (
      <React.Fragment>
        <div className="column is-flex is-aligned-center">
          <span className="is-size-7-mobile">{t('table.purchase')}</span>
        </div>
        <div className="column is-flex is-aligned-center">
          <span className="is-size-7-mobile">{t('table.sale')}</span>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div className="container m-b-4">
      <div className="columns is-mobile m-t-0 m-l-0 m-r-0 m-b-0 has-text-white-bis border-bottom">
        <div className="column is-flex is-aligned-center">
          <div className="field m-r-2 m-b-0">
            <div className="control">
              <div className="select dark-select is-small">
                <select
                  value={city}
                  onChange={value => onChangeCity(value.target.value)}
                  className="is-small"
                >
                  {Object.values(CITY_KEYS).map(item => {
                    return (
                      <option
                        key={item}
                        onClick={onChangeLanguage}
                        value={item}
                      >
                        {citesTranslates[item].title}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="field m-b-0">
            <div className="control">
              <div className="select dark-select is-small">
                <select
                  value={language}
                  onChange={value => onChangeLanguage(value.target.value)}
                  className="is-small"
                >
                  {languages.map(item => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="column has-text-right">
          <div className="has-text-grey-light is-size-6 has-background-grey-darker m-b-0 is-size-7-mobile">
            <span className="align-sub is-size-7">
              {t('table.updated', { value: updatedMsg })}
            </span>
          </div>
        </div>
      </div>

      <div className="columns is-mobile has-background-grey-darker has-text-grey is-marginless">
        <div className="column is-half">
          <div className="bd-notification is-dark">
            <div className="field is-size-7-mobile">
              <input
                className="is-checkradio is-white is-small"
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
                {isWholesale
                  ? t('table.wholesale', { value: 500 })
                  : t('table.retail')}
              </label>
            </div>
          </div>
        </div>
        {currencyTableHeader()}
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
        messageOpen={t('table.hideAnotherCurrencies')}
        messageClose={t('table.showAnotherCurrencies')}
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
            <span className="m-b-1">{t('table.managerMultiCurrencies')}</span>
          </div>
          <div className="columns is-mobile has-background-grey-darker has-text-grey is-marginless">
            <div className="column is-half" />
            {currencyTableHeader()}
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
