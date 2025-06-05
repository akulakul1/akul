import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PawsPage from './components/PawsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/paws" element={<PawsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
