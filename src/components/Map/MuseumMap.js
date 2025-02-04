import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CardData from '../Mainsources/Cards/CardData'; 
import L from 'leaflet';
import './MuseumMap.css'; 

const MapViewAdjuster = ({ bounds }) => {
  const map = useMap();
  useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds, { padding: [50, 50] }); 
    }
  }, [bounds, map]);
  return null;
};

const MuseumMap = () => {
  const museumCoordinates = CardData.map(museum => [
    museum.coordinates.lat,
    museum.coordinates.lng
  ]);

  const bounds = museumCoordinates.length
    ? L.latLngBounds(museumCoordinates)
    : null;

  const handleTrack = (lat, lng) => {
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(googleMapsUrl, '_blank'); // this just opens the tab to a new tab(i dont even know what am i saying)
  };

  return (
    <div className="map-wrapper">
      <MapContainer center={[18.9215, 72.8347]} zoom={12} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {CardData.map(museum => (
          <Marker
            key={museum.id}
            position={[museum.coordinates.lat, museum.coordinates.lng]}
            icon={new L.Icon({
              iconUrl: require('leaflet/dist/images/marker-icon.png'),
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
              shadowSize: [41, 41],
            })}
          >
            <Popup>
              <div className="popup-content">
                <div className="popup-image">
                  <img src={museum.imgSrc} alt={museum.name} />
                </div>
                <div className="popup-details">
                  <h3>{museum.name}</h3>
                  <p>{museum.location}</p>
                  <p>{museum.description}</p>
                  <button onClick={() => handleTrack(museum.coordinates.lat, museum.coordinates.lng)} className="track-button">
                    Track
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
        {bounds && <MapViewAdjuster bounds={bounds} />}
      </MapContainer>
    </div>
  );
};

export default MuseumMap;
