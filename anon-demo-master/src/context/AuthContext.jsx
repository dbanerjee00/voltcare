import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('voltcare_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    // Mock login
    const mockUser = { email, name: email.split('@')[0], id: 'u1' };
    setUser(mockUser);
    localStorage.setItem('voltcare_user', JSON.stringify(mockUser));
    return true;
  };

  const register = (email, password, name) => {
    // Mock register
    const mockUser = { email, name, id: 'u' + Date.now() };
    setUser(mockUser);
    localStorage.setItem('voltcare_user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('voltcare_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
