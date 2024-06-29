import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'

const Layout = () => {
  return (

<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h1>WeCareMotors</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link className='homelink' class="nav-link active" aria-current="page" to={'/'}>HOME</Link>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">Link</a> */}
          <Link class="nav-link" to={'/services'}>Services</Link>
        </li>
       
              <li className="nav-item">
                <Link className="nav-link" to="/service-history">Service History</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cost-calculator">Cost Calculator</Link>
              </li>
        
      </ul>
     
      <button class="btn btn-outline-success" style={{float:'right',width:'130px',height:'40px',borderRadius:'10px'}}
    onClick={()=>{localStorage.removeItem("authorised")
      window.location.reload()}
    }
    >LOGOUT</button>
    </div>
    
  </div>
</nav>
<Outlet/>
</div>
  )
}

export default Layout