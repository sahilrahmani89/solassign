import React from 'react';
import './search-box.css';

const SearchBoxs = ({ value, onChange, onFocus, onBlur, disabled }) => {
  return (
    <input
      type="text"
      className={`search-box ${disabled ? 'disabled' : ''}`}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      placeholder='Search Places...'
    />
  );
};

export default SearchBoxs;
