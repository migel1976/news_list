import React from 'react';
import NavBar from './components/Navbar';

import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import News from './components/News';
import Item from './components/Item';

const App: React.FC = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/item/:id" element={<Item />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
