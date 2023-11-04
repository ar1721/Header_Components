import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LocationDisplay = () => {
    const { logout, isAuthenticated } = useAuth0();  
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    // Using HTML5 Geolocation API to get the user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
          // You can handle errors here, such as displaying an error message to the user.
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
      // Handle situations where geolocation is not supported by the browser.
    }
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div>
      <h2>User Location</h2>
      {location.latitude !== null && location.longitude !== null ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          {/* <button onClick={() => logout()}>
                Sign Out
            </button> */}
        </div>
      ) : (
        <p>Loading location...</p>
        
      )}
    </div>
  );
};

export default LocationDisplay;
