import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login';
import SearchData from './pages/SerachData/SearchData';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SearchData />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
