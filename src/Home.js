import React, { useState } from 'react';
import './Home.css';
import { Select } from './Select';
import { useValueContext } from './ValueContext';

const Home = () => {
  const { value, setValue } = useValueContext();
  console.log("Home -> value", value)

  const options = [
    {
      value: "0",
      label: "I'm not flexible"
    },
    {
      value: "1",
      label: "I'm flexible +/- 1 day"
    },
    {
      value: "3",
      label: "I'm flexible +/- 3 days"
    },
    {
      value: "5",
      label: "I'm flexible +/- 5 days"
    }
  ];

  return (
    <Select
      value={String(value)}
      onChange={(e) => setValue(parseInt(e.target.value, 10))}
      options={options}
    />
    );
  }


export default Home;
