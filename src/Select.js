import React from 'react'

export const Select = ({ options, onChange, value }) => (
  <select onChange={onChange} value={value}>
    {options.map(({ disabled, label, value }) => (
      <option key={label} disabled={disabled} value={value}>
        {label}
      </option>
    ))}
  </select>
);