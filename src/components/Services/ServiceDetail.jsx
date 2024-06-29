import React, { useState, useEffect } from 'react';
import './Services.css';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import ReviewForm from './ReviewForm.jsx';

const ServiceDetail = ({ service }) => {
  const [showModal, setShowModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    
    time: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    vehicleVIN: ''
  });
  const [reviews, setReviews] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [userId, setUserId] = useState('');

  useEffect(() => {
   
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKENDURL}/services/${service._id}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [service._id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingDetails({
      ...bookingDetails,
      [name]: value
    });
  };

  const handlePayment = async (amount) => {
    const options = {
      key: `${import.meta.env.VITE_RAZORPAYKEY}`, 
      amount: amount * 100, 
      currency: 'INR',
      name: 'WeCare Motors',
      description: 'Payment for Service Booking',
      handler: async (response) => {
        try {
          const { razorpay_payment_id } = response;
          const { name, email, phone, date, time, vehicleMake, vehicleModel, vehicleYear, vehicleVIN } = bookingDetails;
          const serviceId = service._id;

         
          const vehicleResponse = await axios.post(`${import.meta.env.VITE_BACKENDURL}/vehicles`, {
            user: userId,
            make: vehicleMake,
            model: vehicleModel,
            year: vehicleYear,
            vin: vehicleVIN
          });

          const vehicleId = vehicleResponse.data._id;

         
          const bookingResponse = await axios.post(`${import.meta.env.VITE_BACKENDURL}/services/bookings`, {
            name,
            email,
            phone,
            date,
            time,
            serviceId,
            vehicleId,
            paymentId: razorpay_payment_id 
          });

         
          await axios.post(`${import.meta.env.VITE_BACKENDURL}/serviceHistory`, {
            user: userId,
            vehicle: vehicleId,
            service: serviceId,
            date,
            details: service.name,
            cost: service.price
          })


          console.log('Booking successful:', bookingResponse.data);
          setShowModal(false);
          
        } catch (error) {
          console.error('Error booking service:', error);
          
        }
      },
      prefill: {
        name: bookingDetails.name,
        email: bookingDetails.email,
        contact: bookingDetails.phone
      },
      notes: {
        address: 'TownHall,Madurai'
      },
      theme: {
        color: '#F37254'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { vehicleMake, vehicleModel, vehicleYear, vehicleVIN } = bookingDetails;

      
      handlePayment(service.price);
    } catch (error) {
      console.error('Error saving vehicle details:', error);
    }
  };

  const toggleReviewForm = () => {
    setShowReviewForm(!showReviewForm);
  };

  const handleReviewSuccess = () => {
    fetchReviews();
    toggleReviewForm();
  };

  return (
    <div className="service-item">
      <h3>{service.name}</h3>
      <p>Price: ₹{service.price.toFixed(2)}</p>
      <p>Category: {service.category}</p>
      <p>Description: {service.description}</p>
      <button className="booking-button" onClick={() => setShowModal(true)}>Book Now</button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Book Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={bookingDetails.name} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={bookingDetails.email} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" name="phone" value={bookingDetails.phone} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" value={bookingDetails.date} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" name="time" value={bookingDetails.time} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formVehicleMake">
              <Form.Label>Vehicle Make</Form.Label>
              <Form.Control type="text" name="vehicleMake" value={bookingDetails.vehicleMake} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formVehicleModel">
              <Form.Label>Vehicle Model</Form.Label>
              <Form.Control type="text" name="vehicleModel" value={bookingDetails.vehicleModel} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formVehicleYear">
              <Form.Label>Vehicle Year</Form.Label>
              <Form.Control type="number" name="vehicleYear" value={bookingDetails.vehicleYear} onChange={handleInputChange} required />
            </Form.Group>
            <Form.Group controlId="formVehicleVIN">
              <Form.Label>Vehicle VIN</Form.Label>
              <Form.Control type="text" name="vehicleVIN" value={bookingDetails.vehicleVIN} onChange={handleInputChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <h4>Reviews:</h4>
      <ul>
        {reviews.map(review => (
          <li key={review._id}>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </li>
        ))}
      </ul>

      <button onClick={toggleReviewForm} className="btn btn-secondary">
        {showReviewForm ? 'Cancel' : 'Add Review'}
      </button>

      {showReviewForm && <ReviewForm serviceId={service._id} onSuccess={handleReviewSuccess} />}
    </div>
  );
};

export default ServiceDetail;
