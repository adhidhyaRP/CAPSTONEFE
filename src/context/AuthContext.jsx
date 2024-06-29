// context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const authorised = localStorage.getItem("authorised");

    if (storedUserId && authorised) {
      setUserId(storedUserId);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (id) => {
    localStorage.setItem("userId", id);
    localStorage.setItem("authorised", "true");
    setUserId(id);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("authorised");
    setUserId(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
