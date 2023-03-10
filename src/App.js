import { Routes ,Route } from 'react-router';
import { useState } from 'react';
import React from 'react';
import './App.css';
import Sign from './Sign-In/Login';
import Register from './Sign-Up/Register';
import Home from './Home/Home'
import EditProfile from './Edit/EditProfile';
function App() {

 const [pro, setpro] = useState({});

  return (
    <Routes>
      <Route path='/' element={<Sign />} />
      <Route path='/register' element={<Register />} />
      <Route exact path='/home' element={<Home pro = { pro } setpro = { setpro }/> } />
      <Route path='/edit' element={<EditProfile pro= { pro } />} />
    </Routes>
  );
}

export default App;
