import React from 'react';
import './App.css';
import Header from './layout/header';
import Home from './layout/home';
import Footer from './layout/footer';

import ProductList from './components/productList';

function App() {
  const [isHomePage, setIsHomePage] = React.useState(true);

  return (
    <main className="app">
      <Header setIsHomePage={setIsHomePage} />
      {isHomePage ?
        <Home setIsHomePage={setIsHomePage} /> :
        <ProductList />
      }
      <Footer />
    </main>
  );
}

export default App;
