import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Control } from './Control';
import { Display } from './Display';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const App: React.FC = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/display" element={<Display />} />
          <Route path="*" element={<Control />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  margin: 8px;
`;
