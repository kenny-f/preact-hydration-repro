require('preact/debug')
import App from './App';
import {h, hydrate} from 'preact';

hydrate(
  <App />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
