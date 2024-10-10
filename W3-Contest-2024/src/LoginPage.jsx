import React from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className='login-page'>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <input type="password" placeholder="Enter your password" required />
        <Link to='/form'>
            <button type="submit">Login</button>
        </Link>
      </form>

    </div>
  );
}
