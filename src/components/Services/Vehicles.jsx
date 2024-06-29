import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKENDURL}/vehicles`);
        setVehicles(response.data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div>
      <h2>Your Vehicles</h2>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle._id}>
            {vehicle.make} {vehicle.model} ({vehicle.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vehicles;
