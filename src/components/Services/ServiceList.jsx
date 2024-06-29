import React, { useEffect, useState } from 'react';
import ServiceDetail from './ServiceDetail';
import './Services.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceList = () => {
  const [datas,setdatas] = useState([])

  const [filter, setFilter] = useState({
    minPrice: 0,
    maxPrice: Infinity,
    category: 'All'
  });

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKENDURL}/services`)
      .then(res => setdatas(res.data))
      .catch(err => console.log(err));
  }, []);

 
  const filteredServices = datas.filter(service => {
    const withinPriceRange = service.price >= filter.minPrice && service.price <= filter.maxPrice;
    const matchesCategory = filter.category === 'All' || service.category.toLowerCase() === filter.category.toLowerCase();
    return withinPriceRange && matchesCategory;
  });

  const handleMinPriceChange = (event) => {
    setFilter({ ...filter, minPrice: parseFloat(event.target.value) });
  };

  const handleMaxPriceChange = (event) => {
    setFilter({ ...filter, maxPrice: parseFloat(event.target.value) });
  };

  const handleCategoryChange = (event) => {
    setFilter({ ...filter, category: event.target.value });
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>OUR SERVICES</h1>
      </div>
      <div className="filters p-3 border rounded mb-4">
        <div className="form-row align-items-end">
          <div className="form-group col-md-4">
            <label>Minimum Price:</label>
            <input type="number" className="form-control" value={filter.minPrice} onChange={handleMinPriceChange} />
          </div>
          <div className="form-group col-md-4">
            <label>Maximum Price:</label>
            <input type="number" className="form-control" value={filter.maxPrice} onChange={handleMaxPriceChange} />
          </div>
          <div className="form-group col-md-4">
            <label>Category:</label>
            <select className="form-control" value={filter.category} onChange={handleCategoryChange}>
              <option value="All">All</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Diagnostic">Diagnostic</option>
              <option value="Repair">Repair</option>
              <option value="Detailing">Detailing</option>
              <option value="Additional">Additional</option>
              <option value="Specialized">Specialized</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        {filteredServices.map(service => (
          <div className="col-lg-4 col-md-6 mb-4" key={service.name}>
            <ServiceDetail service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
