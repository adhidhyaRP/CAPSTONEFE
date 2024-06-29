import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="frontimage">
        <img className="img-fluid" src="https://cdn4.singleinterface.com/files/enterprise/coverphoto/284051/3m-1-27-08-23-06-19-30.jpg" alt="" />
      </div>
     
      <div className="aboutus container text-center my-5">
        <h1>WECAREMOTORS APP</h1>
        {/* {console.log(import.meta.env.VITE_BACKENDURL)} */}
        <p>your trusted partner for all your vehicle repair and maintenance needs. Our mission is to provide smart solutions that enhance your driving experience and keep your vehicle running smoothly. 
        we’re committed to staying at the forefront of automotive technology. We embrace innovation to bring you the best solutions for your vehicle.</p>
        <p>We believe in delivering top-notch service. Our team of skilled technicians is trained to handle everything from routine maintenance to complex repairs.
        You can count on us. We’re transparent, honest, and dedicated to providing the highest level of service.
        With workshops across the country, we serve a diverse range of clients, including workshops, manufacturers, suppliers, corporates, insurers, and individual consumers.</p>
      </div>
      <div className="downloadicon text-center my-4">
        <h2>Download the App</h2>
        <div className="download-button d-inline-flex align-items-center justify-content-center bg-dark text-white rounded-pill px-3 py-2 mt-3">
          <i className="fa-brands fa-google-play me-2"></i> 
          GooglePlay
        </div>
      </div>
      <div className="keyfeatures text-center my-5">
        <h1 className="display-4">KEY FEATURES</h1>
      </div>
      <div className="keyfeaturesicons container">
        <div className="row">
          <div className="col-md-4 text-center my-3">
            <img className="img-fluid mb-3" src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/modules/basic-module/services/insurance/maruti-care-app/service-history.png?la=en&hash=B9336DE98DA02EFDCFC032A075D3196B" alt="" />
            <h2>SERVICE HISTORY</h2>
            <p>Track Service history of your car based on your visits to Service centers</p>
          </div>
          <div className="col-md-4 text-center my-3">
            <img className="img-fluid mb-3" src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/modules/basic-module/services/insurance/maruti-care-app/service-due-reminder.jpg?la=en&hash=4F1F46752C3FCC6ED52010B8984608CB" alt="" />
            <h2>SERVICE DUE <br/> REMINDER</h2>
            <p>Know when your car is due for next scheduled service and set reminder accordingly</p>
          </div>
          <div className="col-md-4 text-center my-3">
            <img className="img-fluid mb-3" src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/modules/basic-module/services/insurance/maruti-care-app/service-booking.png?la=en&hash=3568106511EA6CC49A2532F10A072D3E" alt="" />
            <h2>SERVICE BOOKING</h2>
            <p>Book your car service at any of our Service centers</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center my-3">
            <img className="img-fluid mb-3" src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/modules/basic-module/services/insurance/maruti-care-app/cost-calculator.png?la=en&hash=C1123FF6BB64FC3CC5D7140721C8A7AF" alt="" />
            <h2>COST CALCULATOR</h2>
            <p>Get an estimated cost of your next scheduled service</p>
          </div>
          <div className="col-md-4 text-center my-3">
            <img className="img-fluid mb-3" src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/modules/basic-module/services/insurance/maruti-care-app/service-tracking.png?la=en&hash=1110F76DEDA7444DF53714CA270EC19C" alt="" />
            <h2>SERVICE TRACKING</h2>
            <p>Track the status of your vehicle given for service</p>
          </div>
          <div className="col-md-4 text-center my-3">
            <img className="img-fluid mb-3" src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/modules/basic-module/services/insurance/mobile-car-care/new-icon/service_booking.png?la=en&hash=2B1F877B53673E57DBD04B0248089FFB" alt="" />
            <h2>KNOW YOUR CAR</h2>
            <p>Get knowledge about your car parts and their replacements</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center my-3">
            <img className="img-fluid mb-3" src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/modules/basic-module/services/insurance/maruti-care-app/service-payment.png?la=en&hash=ECAC370B329F076C53F60E30A06FDA8E" alt="" />
            <h2>SERVICE PAYMENT</h2>
            <p>Pay your bills digitally through integrated payment solution</p>
          </div>
          <div className="col-md-4 text-center my-3">
            <img className="img-fluid mb-3" src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/modules/basic-module/services/insurance/mobile-car-care/new-icon/maintenance_cost.png?la=en&hash=018F5F0700AC473904B7DB7484B0458B" alt="" />
            <h2>MAINTENANCE COST</h2>
            <p>Track the cost of maintenance of your car on yearly basis</p>
          </div>
          <div className="col-md-4 text-center my-3">
            <img className="img-fluid mb-3" src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/modules/basic-module/services/insurance/maruti-care-app/service-feedback.png?la=en&hash=1277D3A6D8B7B5815B6A076095F06AC0" alt="" />
            <h2>SERVICE FEEDBACK</h2>
            <p>Share your feedback experience with us</p>
          </div>
        </div>
      </div>
      <div className="pageend text-center py-5">
        <div className="d-flex justify-content-between px-5">
          <div>
            WECAREMOTORS 
          </div>
          <div>
            <h2>Social</h2>
            <h3 className="my-2"><i className="fa-brands fa-facebook"></i> Facebook</h3>
            <h3 className="my-2"><i className="fa-brands fa-x-twitter"></i> Twitter</h3>
            <h3 className="my-2"><i className="fa-brands fa-instagram"></i> Instagram</h3>
            <h3 className="my-2"><i className="fa-brands fa-youtube"></i> YouTube</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
