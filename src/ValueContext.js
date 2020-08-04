import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
export const ValueContext = createContext({ value: '2', setValue: () => {}});

export const useValueContext = () => useContext(ValueContext)