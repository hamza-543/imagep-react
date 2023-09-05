import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import ProcessImage from './pages/ProcessImage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/image_process" exact element={<ProcessImage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
