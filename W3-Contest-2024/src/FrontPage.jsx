import React from 'react';
import { Link } from 'react-router-dom';
import selling from './selling.png';
import './Frontpagee.css';  // Import the CSS
import laptop from './laptop.jpg';

export default function FrontPage() {
  return (
    <div>
      <div className='mainDiv'>
        <img src={selling} alt="logo" width={50} height={50} />
        <nav className='mainNav'>
          <Link to='/signup'>
            <button className='SignUp'>SignUp</button>
          </Link>
          <Link to='/login'>
            <button className='Login'>Login</button>
          </Link>
        </nav>
      </div>

      <div className='Section'>
        <div className='description'>
          <h1>Device Buyback Platform - Simplifying the Sale of Pre-owned Electronics</h1>
          <p>
            The Device Buyback Platform is a streamlined web-based solution designed to help users sell their pre-owned electronic devices, 
            such as smartphones, tablets, and laptops, quickly and securely. Users can easily select their device type, 
            provide detailed information including condition and defects, and receive an instant price estimate. 
            The platform features real-time user verification, a seamless process for choosing pickup or parcel services,
             and multiple payment options for a hassle-free selling experience.
          </p>
        </div>

        <img src={laptop} alt="laptop" width={500} height={400} />
      </div>

      <footer>
        <div className='footer-links'>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact Us</Link>
          <Link to='/privacy'>Privacy Policy</Link>
          <Link to='/terms'>Terms of Service</Link>
        </div>
        <div className='footer-social'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>Facebook</a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>Twitter</a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>Instagram</a>
        </div>
      </footer>
    </div>
  );
}
