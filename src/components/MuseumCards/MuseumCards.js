import React, { useState, useRef } from 'react';
import './MuseumCards.css';
import CardData from '../Mainsources/Cards/CardData'; //Let me just import this shit

const MuseumCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const cardContainerRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    cardContainerRef.current.scrollBy({
      left: scrollOffset,
      behavior: 'smooth',
    });
  };

  const handleMouseDown = (e) => {
    const startX = e.pageX - cardContainerRef.current.offsetLeft;
    const scrollLeft = cardContainerRef.current.scrollLeft;

    const handleMouseMove = (moveEvent) => {
      const x = moveEvent.pageX - cardContainerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      cardContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);//what tf is even this i am doing
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseCard = () => {
    setSelectedCard(null);
  };

  const openGoogleMaps = (coordinates) => {
    window.open(`https://www.google.com/maps?q=${coordinates}`, '_blank'); // ok soooooo wow
  };

  return (
    <div className="museum-card-container">
      <button className="scroll-button left-arrow" onClick={() => handleScroll(-300)}>{'<'}</button>
      <div className="card-wrapper" ref={cardContainerRef} onMouseDown={handleMouseDown}>
        {CardData.map((card) => (
          <div className="museum-card" key={card.id} onClick={() => handleCardClick(card)}>
            <img src={card.imgSrc} alt={card.name} />
            <div className="card-info">
              <p>{card.name}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="scroll-button right-arrow" onClick={() => handleScroll(300)}>{'>'}</button>

      {selectedCard && (
        <div className="enlarged-card-overlay" onClick={handleCloseCard}>
          <div className="enlarged-card">
            <button className="close-button" onClick={handleCloseCard}>X</button>
            <div className="enlarged-card-content">
              <img src={selectedCard.imgSrc} alt={selectedCard.name} className="enlarged-image" />
              <div className="enlarged-text">
                <h2>{selectedCard.name}</h2>
                <p><strong>Location:</strong> {selectedCard.location}</p>
                <p>{selectedCard.description}</p>
                <div className="enlarged-buttons">
                  <button onClick={() => openGoogleMaps(selectedCard.coordinates)}>Find on Maps</button>
                  <button>Buy Tickets?</button> 
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MuseumCards;