import { h } from 'preact';
import { useState } from 'preact/hooks';

const App = () => {
  const [ value, setValue ] = useState('2');
  console.log("App -> value", value)

  const options = [
    {
      value: "0",
      label: "Zero"
    },
    {
      value: "2",
      label: "Two"
    },
    {
      value: "3",
      label: "Three"
    },
    {
      value: "5",
      label: "Five"
    }
  ];
  console.log("App -> options", options)

  return (
    <select onChange={(e) => setValue(e.target.value)} value={value}>
      {options.map(({ disabled, label, value }) => (
        <option key={label} disabled={disabled} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}


export default App;
