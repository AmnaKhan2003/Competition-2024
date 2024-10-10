import React, { useState } from 'react';
import './SignupPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [idNumber, setIdNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/user/register', {
        idNumber,
        email,
        password
      });

      if (response.data) {
        navigate('/login');
      }
    } catch (error) {
      setError('Signup failed. Please check your input or try again later.');
      console.error(error);
    }
  };

  return (
    <div className='signup-page'>
      <h2>Sign Up</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter your ID"
          required
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
