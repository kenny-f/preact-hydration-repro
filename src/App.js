import { h } from 'preact';
import { useState } from 'preact/hooks';
import Home from './Home';
import { ValueContext } from './ValueContext';

export const MyProvider = ({ children }) => {
  const [s, setS] = useState('2')

  return (
    <ValueContext.Provider value={{ value: s, setValue: setS }}>
      {children}
    </ValueContext.Provider>
  )
}

const App = () => (
  <MyProvider>
    <Home />
  </MyProvider>
);

export default App;
