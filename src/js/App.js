// App.js
import React from 'react';
import '../css/App.css';
import Nav from './nav';
import Header from './Header';
import Router from './Router';
import MainPage from './main_new';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router />
    </div>
  );
}

export default App;
