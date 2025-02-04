// src/components/MainSlider.js
import React, { useEffect, useState } from 'react';
import './MainSlider.css';
import img1 from '../../Images/img1.png'
import img2 from '../../Images/img2.png'
import img3 from '../../Images/img3.png'
import img4 from '../../Images/img4.png'
import img5 from '../../Images/img5.png'


const sliderData = [
  {
    id: 1,
    image: img1,
    title: 'Didarganj Yakshini',
    description: 'it is a sculpture from Maurya Dynasty found at Bihar Museum, Patna.  Yakshi with its incomparable beauty is world famous as a symbol of the ideal woman and represents a unique craftmanship of ancient Indian art. The story of discovery of Yakshi is quite interesting.',
  },
  {
    id: 2,
    image: img2,
    title: '‘Siva Nataraja’ depicts the panchkrityas (five activities) of Shiva',
    description: 'About 3 feet high by 2.7 feet wide, Siva Nataraja signifies art and music, portraying the panchkrityas (five activities) of Shiva: creation, destruction, preservation, grace, and veiling.',
  },
  {
    id: 3,
    image: img3,
    title: 'Dancing girl',
    description: 'This figure is a remarkable achievement of the artists of this ancient culture. From this masterpiece we know that the Harappans were skilled in metallurgy and knew how to cast alloys of metals using the lost wax process. This image of a young woman large eyes, flat nose and bunched curly hair are all featured in an artistic way.',
  },
  {
    id: 4,
    image: img4,
    title: 'Un-humped bull',
    description: 'Terracotta bull figurines are commonly found at the larger urban centres and smaller settlements of the Harappan culture. Among the livestock, depictions of the bull on seals or figurines have always been done very artistically. This terracotta bull figurine is entirely handmade.',
  },
  {
    id: 5,
    image: img5,
    title: 'Railing Pillar Depicting Asita’s Visit',
    description: 'Sage Asita visited King Suddhodhana at his palace when the Buddha was born as prince Siddhartha in the Shakya Clan. Upon seeing the auspicious signs on the baby’s body, Asita prophesied that he would either become a great king or a great monk, of which, the latter came to be true. This episode is shown on the part of this relief panel.',
  },
];

const MainSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {sliderData.map((slide, index) => (
          <div className="slider-card" key={slide.id}>
            <div className="image-section">
              <img src={slide.image} alt={slide.title} />
            </div>
            <div className="text-section">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSlider;
