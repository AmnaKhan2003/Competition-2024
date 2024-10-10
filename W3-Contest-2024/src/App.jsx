import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './FrontPage';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Form from './Form';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/form' element={<Form />} />  
      </Routes>
    </Router>
  );
}

export default App;
