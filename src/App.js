import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Header from './components/Header';
import Main from './components/Main';
import MainBody from './components/MainBody';

export default function App() {
  return (
    <div>
      <Header />
      <br />
      {/* <Main /> */}
      <MainBody/>
    </div>
  );
}
