import React from 'react';
import Navibar from './components/Navibar';

import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import News from './components/News';
import Item from './components/Item';

const App: React.FC = () => {
  return (
    <>
      <Container>
        <Navibar />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/item" element={<Item />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
