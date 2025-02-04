import museum1 from '../../Images/Museum1.jpg';
import museum2 from '../../Images/Museum2.jpg';
import museum3 from '../../Images/Museum3.jpg';
import museum4 from '../../Images/Museum4.jpeg';
import museum5 from '../../Images/Museum5.jpg';
import museum6 from '../../Images/Museum6.jpg';

const CardData = [
  {
    id: 1,
    name: 'Chhatrapati Shivaji Maharaj Vastu Sangrahalaya',
    imgSrc: museum1,
    location: 'Mumbai, India',
    coordinates: {
      lat: 18.9234, // Latitude
      lng: 72.8332  // Longitude
    },
    description: 'A prominent museum in Mumbai known for its impressive collection of art and artifacts.',
  },
  {
    id: 2,
    name: 'Prince of Wales Museum',
    imgSrc: museum2,
    location: 'Mumbai, India',
    coordinates: {
      lat: 18.9245, // Latitude
      lng: 72.8323  // Longitude
    },
    description: 'A renowned museum with a wide range of historical artifacts and art collections.',
  },
  {
    id: 3,
    name: 'National Gallery of Modern Art',
    imgSrc: museum3,
    location: 'Mumbai, India',
    coordinates: {
      lat: 18.9260, // Latitude
      lng: 72.8326  // Longitude
    },
    description: 'A museum featuring modern and contemporary art from India and around the world.',
  },
  {
    id: 5,
    name: 'Bombay Natural History Society',
    imgSrc: museum4,
    location: 'Mumbai, India',
    coordinates: {
      lat: 18.9332, // Latitude
      lng: 72.8228  // Longitude
    },
    description: 'A museum dedicated to the natural history of the region, with various exhibits and collections.',
  },
  {
    id: 6,
    name: 'RBI Monetary Museum',
    imgSrc: museum5,
    location: 'Mumbai, India',
    coordinates: {
      lat: 18.9382, // Latitude
      lng: 72.8260  // Longitude
    },
    description: 'A museum highlighting the history of currency and the role of the Reserve Bank of India.',
  },
  {
    id: 7,
    name: 'Indian Museum',
    imgSrc: museum6,
    location: 'Mumbai, India',
    coordinates: {
      lat: 18.9270, // Latitude
      lng: 72.8350  // Longitude
    },
    description: 'A prominent museum with extensive collections spanning various fields of art and culture.',
  },
];

export default CardData;
