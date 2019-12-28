// LIBRARIES
import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// COMPONENTS
import {
  Header,
  CurrencyBlock,
  InfoLine,
  ErrorBoundary
} from '../../components';
import { ModalMap } from './Modals';
// CONSTANTS
import { PAGE_TITLE, CITY_KEYS, CITIES, LOCAL_STORAGE_KEY } from './constants';

const PageHome = () => {
  const history = useHistory();
  const [isShowMap, setIsShowMap] = useState(false);
  const [stateCurrency, setStateCurrency] = useState({
    loading: true,
    currencyEntry: []
  });

  const onChangeCity = city => {
    setStateCurrency({
      ...stateCurrency,
      loading: true
    });

    localStorage.setItem(LOCAL_STORAGE_KEY, city);
    history.push(city);
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

  useEffect(() => {
    const city = history.location.pathname;

    if (Object.values(CITY_KEYS).indexOf(city) !== -1) {
      getDataForChangedCity(city);
    } else if (
      Object.values(CITY_KEYS).indexOf(
        localStorage.getItem(LOCAL_STORAGE_KEY)
      ) !== -1
    ) {
      history.push(localStorage.getItem(LOCAL_STORAGE_KEY));
      getDataForChangedCity(localStorage.getItem(LOCAL_STORAGE_KEY));
    } else {
      history.push(CITY_KEYS.kharkiv);
      localStorage.setItem(LOCAL_STORAGE_KEY, CITY_KEYS.kharkiv);
    }
  }, [history, history.location.pathname, getDataForChangedCity]);

  const city =
    Object.values(CITY_KEYS).indexOf(history.location.pathname) === -1
      ? CITY_KEYS.kharkiv
      : history.location.pathname;

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_TITLE} />
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
        />
      </ErrorBoundary>
      <section id="info" className="container m-t-4 m-b-4 border-top">
        <div className="columns m-b-0 m-t-4 m-l-0 m-r-0">
          <div className="column">
            <h2 className="is-size-5-touch is-size-5-desktop title has-text-grey">
              Контакты
            </h2>
            {CITIES[city].cityInfo.map(item => (
              <InfoLine key={item.label} icon={item.icon}>
                {item.label}
              </InfoLine>
            ))}
            <InfoLine icon="fa-map-marked">
              <a
                className="has-text-grey-light text-underline"
                onClick={() => setIsShowMap(!isShowMap)}
              >
                Посмотреть на карте
              </a>
            </InfoLine>
            <div className="is-flex is-justified-center is-flex-columns">
              {CITIES[city].phoneNumbers.map(item => (
                <span key={item} className="m-b-2">
                  <span className="icon m-r-1 align-middle has-text-grey-lighter">
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
              Дополнительная информация
            </h2>
            <h2 className="title is-size-6-desktop is-size-6-touch has-text-grey-lighter m-b-2">
              <span className="icon m-r-1 align-middle has-text-grey-lighter">
                <i className="fas fa-history" />
              </span>
              Работаем 24/7
            </h2>
            <InfoLine icon="fa-coins">{'Принимаем монеты'}</InfoLine>
            <InfoLine icon="fa-money-bill-wave">
              {'Принимаем ветхие купюры с минимальной комиссией'}
            </InfoLine>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PageHome;
