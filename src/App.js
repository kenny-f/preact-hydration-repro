import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';
import {ThemeProvider} from 'emotion-theming';

const theme = {
  red: 'red',
  blue: 'blue',
}

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </ThemeProvider>
);

export default App;
