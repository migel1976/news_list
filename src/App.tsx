import React from 'react';
import Navibar from './components/Navibar';

import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';

const App: React.FC = () => {
  return (
    <>
      <Container>
        <Navibar />
        <Routes>
          <Route path="/" element={<Home />}>
            Главная
          </Route>
        </Routes>
      </Container>
    </>
  );
};

export default App;
