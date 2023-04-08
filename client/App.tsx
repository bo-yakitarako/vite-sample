import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Control } from './Control';
import { Display } from './Display';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/display" element={<Display />} />
        <Route path="*" element={<Control />} />
      </Routes>
    </BrowserRouter>
  );
};
