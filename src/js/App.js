// App.js
import React from 'react';
import '../css/App.css';
import Nav from './nav';
import Header from './Header';
import Router from './Router';

function App() {
  return (
    <h1> 배포 테스트 </h1>
    <div className="App">
      <Header />
      <Nav />
      <Router />
    </div>
  );
}

export default App;
