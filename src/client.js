import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/core';

const cache = createCache();

hydrate(
  <CacheProvider value={cache}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CacheProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
