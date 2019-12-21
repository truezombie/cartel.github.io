// LIBRARIES
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// CONTAINERS
import PageHome from './containers/PageHome';

import './styles/index.scss';

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <PageHome />
    </BrowserRouter>
  );
}

export default App;
