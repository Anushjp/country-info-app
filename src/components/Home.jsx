import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home.css';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name,region,flag')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error fetching countries:', error));
  }, []);

  const handleSignOut = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div className="home-container">
      <header className="home-header">
        <h2>Countries</h2>
        <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
      </header>
      <div className="countries-list">
        {countries.map((country) => (
          <div key={country.name} className="country-card">
            <img src={country.flag} alt={`Flag of ${country.name}`} className="country-flag" />
            <div className="country-info">
              <h3 className="country-name">{country.name}</h3>
              <p className="country-region">{country.region}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
