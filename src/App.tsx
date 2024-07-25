import React from 'react';
import Navibar from './components/Navibar';

import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Item from './components/Item';

const App: React.FC = () => {
  return (
    <>
      <Navibar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}>
            Главная
          </Route>
          <Route path="/item" element={<Item />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
