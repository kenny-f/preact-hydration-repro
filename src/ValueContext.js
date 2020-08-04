import { createContext, useContext } from 'react';

export const ValueContext = createContext({ value: 2, setValue: () => {}});

export const useValueContext = () => {
  const a = useContext(ValueContext)
  return a;
}