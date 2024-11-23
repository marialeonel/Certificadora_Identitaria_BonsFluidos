import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as jwt_decode from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      try {
        const decodedToken = jwt_decode.default(token);
        const currentTime = Date.now() / 1000; 

        if (decodedToken.exp < currentTime) {
          setIsAuthenticated(false);
          setUser(null);
          localStorage.removeItem('accessToken');
          localStorage.removeItem('user');
          window.location.href = '/login';

        } else {
          setIsAuthenticated(true);
          setUser(JSON.parse(localStorage.getItem('user')));
        }
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = (userData, tokens) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem('accessToken', tokens.accessToken);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
