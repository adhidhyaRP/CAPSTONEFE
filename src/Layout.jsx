


import React from 'react';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const Layout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><h1>WeCareMotors</h1></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="homelink nav-link active" aria-current="page" to={'/'}>HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/services'}>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service-history">Service History</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cost-calculator">Cost Calculator</Link>
              </li>
            </ul>
            <button
              className="btn btn-outline-success"
              style={{ float: 'right', width: '130px', height: '40px', borderRadius: '10px' }}
              onClick={() => {
                logout();
                navigate('/login');
                // window.location.reload();
              }}
            >
              LOGOUT
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
