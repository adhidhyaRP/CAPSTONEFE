import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CostCalculator = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalCost, setTotalCost] = useState(0);

  const handleCalculate = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        
        return;
      }
      const response = await axios.get(`${import.meta.env.VITE_BACKENDURL}/serviceHistory/total-cost`, {
        params: {
          userId,
          startDate,
          endDate
        }
      });
      setTotalCost(response.data.totalCost);
    } catch (error) {
      console.error('Error calculating total cost:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Cost Calculator</h2>
      <div className="mb-3">
        <label htmlFor="startDate" className="form-label">Start Date:</label>
        <input
          type="date"
          id="startDate"
          className="form-control"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="endDate" className="form-label">End Date:</label>
        <input
          type="date"
          id="endDate"
          className="form-control"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleCalculate}>Calculate</button>
      <div className="mt-3">
        <h3>Total Cost: ₹{totalCost}</h3>
      </div>
    </div>
  );
};

export default CostCalculator;
