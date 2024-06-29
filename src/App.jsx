import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Forgotpassword from './components/Auth/Forgotpassword';
import Resetpassword from './components/Auth/Resetpassword';
import Register from './components/Auth/Register';
import Home from './components/Home/home.jsx';
import Layout from './Layout.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/AuthContext.jsx';

import ServiceList from './components/Services/ServiceList.jsx';
import Vehicles from './components/Services/Vehicles.jsx';
import ServiceHistory from './components/Services/ServiceHistory.jsx';
import CostCalculator from './components/Services/CostCalculator.jsx';

const ProtectedRoute = ({ element }) => {
  const isloggedin = localStorage.getItem("authorised");
  if (isloggedin) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/resetpassword/:id/:token" element={<Resetpassword />} />
          <Route path="/" element={<ProtectedRoute element={<Layout />} />}>
            <Route index element={<ProtectedRoute element={<Home />} />} />
            <Route path="services" element={<ProtectedRoute element={<ServiceList />} />} />
            <Route path="vehicles" element={<ProtectedRoute element={<Vehicles />} />} />
            <Route path="service-history" element={<ProtectedRoute element={<ServiceHistory />} />} />
            <Route path="cost-calculator" element={<ProtectedRoute element={<CostCalculator />} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;


