/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Content from './components/Content';
import SideBar from './components/SideBar';
import AppBox from './Style/MainContainers';

function App() {
  return (
    <AppBox>
      <SideBar />
      <Content />
    </AppBox>
  );
}

export default App;
