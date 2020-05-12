import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';
import { ThemeContext } from './Theme'

const App = () => (
  <ThemeContext.Provider value={{ red: 'red', blue: 'blue' }}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </ThemeContext.Provider>
);

export default App;
