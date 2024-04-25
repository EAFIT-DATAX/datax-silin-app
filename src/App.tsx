import React, { useState } from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SearchData from './pages/SerachData/SearchData';
import MainLayout from './layouts/MainLayout/MainLayout';
import LoadingLayout from './layouts/LoadingLayout';
import Login from './pages/Login';

function App() {
  const [loading, setLoading] = useState(false);

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
