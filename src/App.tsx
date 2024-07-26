import React from 'react';
import Navibar from './components/Navibar';

import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Item from './components/Item';
// import { MainContainer } from './App.styled';

const App: React.FC = () => {
  return (
    <>
      {/* <MainContainer> */}
      <Navibar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}>
            Главная
          </Route>
          <Route path="/item" element={<Item />} />
        </Routes>
      </Container>
      {/* </MainContainer> */}
    </>
  );
};

export default App;
