import React from 'react';
import './App.css';
import Header from './layout/header';
import Home from './layout/home';
import Footer from './layout/footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
