// App.js
import React from 'react';
import '../css/App.css';
import Nav from './nav';
import Header from './Header';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <h3> 테스트 3 </h3>
      <Header />
      <Nav />
      <Router />
    </div>
  );
}

export default App;
