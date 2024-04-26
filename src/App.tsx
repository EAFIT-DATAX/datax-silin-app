import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SearchData from './pages/SerachData/SearchData';
import MainLayout from './layouts/MainLayout/MainLayout';
import Login from './pages/Login';

function App() {

  const navigate = useNavigate();

  if (!localStorage.getItem('access_token') || !localStorage.getItem('id_token')) {
    navigate('/login');
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <MainLayout>
        <Routes>
          <Route path="/" element={<SearchData />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
