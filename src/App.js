/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Content from './components/Content';
import SideBar from './components/SideBar';
import { AppBox } from './Style/StyledComponents';

function App() {
  return (
    <AppBox className="App">
      <SideBar />
      <Content />
    </AppBox>
  );
}

export default App;
