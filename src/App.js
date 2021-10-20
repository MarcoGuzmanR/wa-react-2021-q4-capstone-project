import React from 'react';
import './App.css';
import Header from './layout/header';
import Home from './layout/home';
import Footer from './layout/footer';

import ProductList from './components/productList';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  return (
    <main className="app">
      <Header setCurrentPage={setCurrentPage} />
      {currentPage === 'home' ?
        <Home setCurrentPage={setCurrentPage} /> :
        <ProductList />
      }
      <Footer />
    </main>
  );
}

export default App;
