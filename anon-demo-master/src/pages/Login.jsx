import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
      navigate('/');
    }
  };

  return (
    <div className="container" style={{ padding: '60px 0', minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '400px', width: '100%', padding: '30px', border: '1px solid var(--cultured)', borderRadius: '10px', backgroundColor: 'var(--white)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--eerie-black)' }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', color: 'var(--sonic-silver)' }}>Email</label>
            <input 
              type="email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              style={{ width: '100%', padding: '10px', border: '1px solid var(--cultured)', borderRadius: '5px' }} 
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', color: 'var(--sonic-silver)' }}>Password</label>
            <input 
              type="password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              style={{ width: '100%', padding: '10px', border: '1px solid var(--cultured)', borderRadius: '5px' }} 
            />
          </div>
          <button type="submit" style={{ backgroundColor: 'var(--salmon-pink)', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
            Login
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '15px', color: 'var(--sonic-silver)' }}>
          Don't have an account? <Link to="/register" style={{ color: 'var(--salmon-pink)' }}>Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
