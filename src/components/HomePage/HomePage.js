import React from 'react';
import MainSlider from '../Mainsources/MainSlider/MainSlider'
import './HomePage.css'
import Cards from '../MuseumCards/MuseumCards'
import MuseumMap from '../Map/MuseumMap'

const HomePage = () => {
    return (
        <div className="home-container">
      <div className="main-section">
          <MainSlider/>
          <h1 className='MuseumsNearYou'>Museums Near You:</h1>
            <Cards/>
          <h1 className='LocationsOfMuseums'>Locations of the Museums:</h1>
            <MuseumMap/>
      </div>

      <div className="fixed-chatbot-section">
        <h2>Chatbot Section</h2>
        <p>ChatBot area hehe</p>
      </div>
    </div>
    );
};

export default HomePage;
