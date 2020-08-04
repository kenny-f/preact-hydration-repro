import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import './App.css';
import { ThemeContext } from './Theme'
import { ValueContext } from './ValueContext';

export const MyProvider = ({ children }) => {
  const [s, setS] = useState(2)

  return (
    <ValueContext.Provider value={{ value: s, setValue: setS }}>
      {children}
    </ValueContext.Provider>
  )
}


const App = () => (
  <MyProvider>
    <ThemeContext.Provider value={{ red: 'red', blue: 'blue' }}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </ThemeContext.Provider>
  </MyProvider>

);

export default App;
