import React, { useState } from 'react';
import './CityDropdown.css'; 

const cities = [
  'New Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bangalore',
  'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'
];

const CityDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState(cities);
  const [selectedCity, setSelectedCity] = useState('Select Your City');

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    setFilteredCities(cities.filter(city => city.toLowerCase().includes(term.toLowerCase())));
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city); 
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleAutoDetect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const detectedCity = 'Mumbai'; 
        setSelectedCity(detectedCity);
        setFilteredCities(cities);
        setIsOpen(false);
      });
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className="city-dropdown-container">
      <div className="dropdown-header" onClick={handleToggle}>
        <span>{selectedCity}</span> 
        <div className={`dropdown-icon ${isOpen ? 'open' : ''}`}></div>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <input
            type="text"
            className="dropdown-search"
            placeholder="Search cities..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="autodetect-button" onClick={handleAutoDetect}>
            AutoDetect
          </button>
          <ul className="dropdown-list">
            {filteredCities.map((city, index) => (
              <li key={index} onClick={() => handleSelectCity(city)}>
                {city}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CityDropdown;
