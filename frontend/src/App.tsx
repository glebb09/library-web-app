import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom'

import HomePage from './components/pages/home/HomePage';
import Register from './components/molecules/forms/register/Register';
import Login from './components/molecules/forms/login/Login';
import NavBar from './components/molecules/navbar/NavBar';
import Profile from './components/pages/profile';
import Layout from './components/organisms/layout/Layout';
import Footer from './components/molecules/footer/Footer';

import '../src/styles/App.scss';

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />}/>
          <Route path="register" element={<Register />}/>
          <Route path="login" element={<Login />}/>
          <Route path="updateSelf" element={<Profile />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
