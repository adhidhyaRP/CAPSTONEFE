import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceHistory = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState('all');
  const [history, setHistory] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      
      return;
    }

    const fetchVehicles = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKENDURL}/vehicles/user/${userId}`);
        setVehicles(response.data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
  }, []);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) {
          
          return;
        }

        const url = selectedVehicle === 'all'
          ? `${import.meta.env.VITE_BACKENDURL}/serviceHistory/all/serviceHistory?userId=${userId}`
          : `${import.meta.env.VITE_BACKENDURL}/serviceHistory/${selectedVehicle}/serviceHistory?userId=${userId}`;

        const response = await axios.get(url);
        console.log('Fetched history:', response.data);
        setHistory(response.data);

        const total = response.data.reduce((acc, record) => acc + record.cost, 0);
        setTotalExpenses(total);
      } catch (error) {
        console.error('Error fetching service history:', error);
      }
    };

    fetchHistory();
  }, [selectedVehicle]);

  return (
    <div className="container mt-4">
      <h2>Service History</h2>
      <div className="mb-3">
        <label htmlFor="vehicleSelect" className="form-label">Select Vehicle:</label>
        <select
          id="vehicleSelect"
          className="form-select"
          value={selectedVehicle}
          onChange={(e) => setSelectedVehicle(e.target.value)}
        >
          <option value="all">All Vehicles</option>
          {vehicles.map(vehicle => (
            <option key={vehicle._id} value={vehicle._id}>
              {vehicle.make} {vehicle.model} ({vehicle.year})
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-3">
        <h3>Total Expenses: ₹{totalExpenses}</h3>
      </div>
      {history.length > 0 ? (
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Date</th>
              <th>Details</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {history.map(record => (
              <tr key={record._id}>
                <td>{new Date(record.date).toLocaleDateString()}</td>
                <td>{record.details}</td>
                <td>₹{record.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No service history found.</p>
      )}
    </div>
  );
};

export default ServiceHistory;
