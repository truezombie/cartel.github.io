// LIBRARIES
import React, { useEffect, useState, useCallback } from 'react';
import i18n from 'i18next';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
// COMPONENTS
import {
  Header,
  CurrencyBlock,
  InfoLine,
  ErrorBoundary,
  Footer
} from '../../components';
import { ModalMap } from './Modals';
// CONSTANTS
import { CITY_KEYS, CITIES, SEARCH_PARAMS_KEYS } from './constants';

const PageHome = () => {
  const {
    t,
    i18n: {
      store: { data: dataLanguages }
    }
  } = useTranslation();
  const history = useHistory();
  const [isShowMap, setIsShowMap] = useState(false);
  const [stateCurrency, setStateCurrency] = useState({
    loading: true,
    currencyEntry: []
  });

  const validationFunctionCity = value => {
    return Object.values(CITY_KEYS).indexOf(value) === -1 ? null : value;
  };

  const validationFunctionLanguage = value => {
    return Object.keys(dataLanguages).indexOf(value) === -1 ? null : value;
  };

  const getSearchParam = (key, defaultValue, validationFunction) => {
    const params = new URL(document.location).searchParams;
    const paramLocalStorage = localStorage.getItem(key);
    const paramQuery = params.get(key);

    return (
      validationFunction(paramQuery) ||
      validationFunction(paramLocalStorage) ||
      defaultValue
    );
  };

  const setSearchParam = (key, value) => {
    let params = new URLSearchParams(window.location.search);

    params.set(key, value);

    history.push({
      pathname: '/',
      search: params.toString()
    });
  };

  const getDataForChangedCity = useCallback(city => {
    fetch(CITIES[city].tableUrl)
      .then(response => {
        return response.json();
      })
      .then(json => {
        setStateCurrency({
          ...setStateCurrency,
          loading: false,
          currencyEntry: json.feed.entry
        });
      });
  }, []);

  const CITIES_TRANSLATES = {
    [CITY_KEYS.kharkiv]: {
      title: t('cities.kharkiv.title'),
      cityInfo: [
        {
          label: t('cities.kharkiv.address'),
          icon: 'fa-map-marked'
        },
        {
          label: t('cities.kharkiv.additional'),
          icon: 'fa-subway'
        }
      ]
    },
    [CITY_KEYS.pokrowsk]: {
      title: t('cities.pokrowsk.title'),
      cityInfo: [
        {
          label: t('cities.pokrowsk.address'),
          icon: 'fa-map-marked'
        }
      ]
    },
    [CITY_KEYS.lviv]: {
      title: t('cities.lviv.title'),
      cityInfo: [
        {
          label: t('cities.lviv.address'),
          icon: 'fa-map-marked'
        },
        {
          label: t('cities.lviv.additional'),
          icon: 'fa-building'
        }
      ]
    }
  };

  const onChangeCity = city => {
    setStateCurrency({
      ...stateCurrency,
      loading: true
    });

    localStorage.setItem(SEARCH_PARAMS_KEYS.city, city);
    setSearchParam(SEARCH_PARAMS_KEYS.city, city);
  };

  const onChangeLanguage = language => {
    localStorage.setItem(SEARCH_PARAMS_KEYS.language, language);
    setSearchParam(SEARCH_PARAMS_KEYS.language, language);
  };

  const city = getSearchParam(
    SEARCH_PARAMS_KEYS.city,
    CITY_KEYS.kharkiv,
    validationFunctionCity
  );

  const lang = getSearchParam(
    SEARCH_PARAMS_KEYS.language,
    'ua',
    validationFunctionLanguage
  );

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, getDataForChangedCity]);

  useEffect(() => {
    getDataForChangedCity(city);
  }, [city, getDataForChangedCity]);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('page.title')}</title>
        <meta name="description" content={t('page.title')} />
      </Helmet>
      <Header
        phoneNumbers={CITIES[city].phoneNumbers}
        telegramLink={CITIES[city].telegram}
      />
      <ModalMap
        mapUrl={CITIES[city].googleMap}
        show={isShowMap}
        toggle={() => setIsShowMap(!isShowMap)}
      />
      <ErrorBoundary>
        <CurrencyBlock
          loading={stateCurrency.loading}
          currency={stateCurrency.currencyEntry}
          city={city}
          onChangeCity={onChangeCity}
          onChangeLanguage={onChangeLanguage}
          citesTranslates={CITIES_TRANSLATES}
        />
      </ErrorBoundary>
      <section id="info" className="container m-t-4 m-b-4 border-top">
        <div className="columns m-b-0 m-t-4 m-l-0 m-r-0">
          <div className="column">
            <h2 className="is-size-5-touch is-size-5-desktop title has-text-grey">
              {t('additionalInfo.contacts')}
            </h2>
            {CITIES_TRANSLATES[city].cityInfo.map(item => (
              <InfoLine key={item.label} icon={item.icon}>
                {item.label}
              </InfoLine>
            ))}
            <InfoLine icon="fa-map-marked">
              <a
                className="has-text-grey-lighter text-underline text-underline"
                onClick={() => setIsShowMap(!isShowMap)}
              >
                {t('additionalInfo.showOnMap')}
              </a>
            </InfoLine>
            <div className="is-flex is-justified-center is-flex-columns">
              {CITIES[city].phoneNumbers.map(item => (
                <span key={item} className="m-b-2">
                  <span className="icon m-r-1 align-middle has-text-grey">
                    <i className="fas fa-phone-alt" />
                  </span>
                  <a href={`tel:${item}`} className="has-text-grey-lighter">
                    {item}
                  </a>
                </span>
              ))}
            </div>
          </div>
          <div className="column has-text-left-touch has-text-right-desktop">
            <h2 className="is-size-5-touch is-size-5-desktop title has-text-grey">
              {t('additionalInfo.additional')}
            </h2>
            <InfoLine icon="fa-history">
              {t('table.works', { value: '24/7' })}
            </InfoLine>
            <InfoLine icon="fa-coins">{t('additionalInfo.coins')}</InfoLine>
            <InfoLine icon="fa-money-bill-wave">
              {t('additionalInfo.badBills')}
            </InfoLine>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default PageHome;
