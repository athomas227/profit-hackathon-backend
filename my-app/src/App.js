import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax


mapboxgl.accessToken = 'pk.eyJ1IjoiY2xhaXJlcDkiLCJhIjoiY2x2N2gwcDFrMGFhYjJ2cGhvdDViM2NjOCJ9.io2kd3EZwz9Wes88BsJ7Jg';

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    const successLocation = (position) => {
      const center = [position.coords.longitude, position.coords.latitude];
      setupMap(center);
    }

    const errorLocation = () => {
      setupMap([lng, lat]);
    }

    const setupMap = (center) => {
      if (!map.current) { // Initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: center,
          zoom: zoom
        });

        map.current.on('move', () => {
          setLng(map.current.getCenter().lng.toFixed(4));
          setLat(map.current.getCenter().lat.toFixed(4));
          setZoom(map.current.getZoom().toFixed(2));
        });

        // Add navigation control to the map
        const nav = new mapboxgl.NavigationControl();
        map.current.addControl(nav, 'top-right');

       

        // Add directions control to the map
        // const directions = new MapboxDirections({
        //   accessToken: mapboxgl.accessToken
        // });
        // map.current.addControl(directions, "top-left");
      }
    }

    // Request the user's location
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true });
  }, [lng, lat, zoom]); // Add dependencies to avoid unnecessary re-renders

  return (
    <div className='body'>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default App;
