import React, { useEffect } from 'react';
import './Home.css'
import { useState } from 'react/cjs/react.development';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);
    // console.log(countries);
  
     useEffect(() => {
       fetch('https://restcountries.eu/rest/v2/all')
       .then(res => res.json())
       .then(data => setCountries(data))
     })
    return (
        <div className="country-container">
            {
                countries.map(country =>  <Country country={country} />)
            }
        </div>
    );
};

export default Home;