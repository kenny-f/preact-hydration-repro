import { h } from 'preact';
import { useValueContext } from './ValueContext';

const Home = () => {
  const { value, setValue } = useValueContext();

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


export default Home;
