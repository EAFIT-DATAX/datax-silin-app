import React, { useState } from 'react';
import './App.css';

import SearchData from './pages/SerachData/SearchData';
import MainLayout from './layouts/MainLayout/MainLayout';
import LoadingLayout from './layouts/LoadingLayout';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <MainLayout>
        <LoadingLayout isLoading={loading} size={20}>
          <SearchData />
        </LoadingLayout>
      </MainLayout>
    </>
  );
}

export default App;
