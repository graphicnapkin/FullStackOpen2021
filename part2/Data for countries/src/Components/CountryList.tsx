import React from 'react';
import { CountryType, CountryListProps } from '../types';

const CountryList = ({ countries, setFilter }: CountryListProps) => {
  const handleClick = (country: CountryType) => {
    setFilter([country]);
  };

  return (
    <div>
      {countries.map((country) => (
        <div key={country.alpha2Code}>
          {country.name.official}{' '}
          <button onClick={() => handleClick(country)}>show</button>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
