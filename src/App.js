/* eslint-disable react/jsx-filename-extension */
import React, { useReducer } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { StateProvider } from './context';
import Content from './components/Content';
import SideBar from './components/side_bar/SideBar';
import AppBox from './containers/MainContainers';
import Reducer from './reducers/Reducer';

smoothscroll.polyfill()

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
