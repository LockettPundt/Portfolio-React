/* eslint-disable react/jsx-filename-extension */
import React, { useReducer } from 'react';
import { StateProvider } from './context';
import Content from './components/Content';
import SideBar from './components/side_bar/SideBar';
import AppBox from './style/MainContainers';
import Reducer from './reducers/Reducer';

const status = localStorage.getItem('darkMode') || false;
const initialState = {
  darkMode: status === 'true',
};
console.log(localStorage.getItem('darkMode'));
console.log('app initialstate status', initialState.darkMode);

function App() {
  return (
    <StateProvider value={useReducer(Reducer, initialState)}>
      <AppBox>
        <SideBar />
        <Content />
      </AppBox>
    </StateProvider>

  );
}

export default App;
