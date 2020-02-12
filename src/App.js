// LIBRARIES
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
// CONTAINERS
import PageHome from './containers/PageHome';
// TRANSLATES
import en from '../src/translations/en';
import pl from '../src/translations/pl';
import ru from '../src/translations/ru';
import ua from '../src/translations/ua';

import './styles/index.scss';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en
      },
      pl: {
        translation: pl
      },
      ru: {
        translation: ru
      },
      ua: {
        translation: ua
      }
    },
    lng: 'ua',
    fallbackLng: 'ua',

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <PageHome />
    </BrowserRouter>
  );
}

export default App;
