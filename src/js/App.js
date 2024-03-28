// App.js
import React from 'react';
import '../css/App.css';
import Nav from './nav';
import Header from './Header';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <h1> 슬랙 테스트  </h1>
      <Header />
      <Nav />
      <Router />
    </div>
  );
}

export default App;
