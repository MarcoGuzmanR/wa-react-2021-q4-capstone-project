import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './layout/header';
import Home from './layout/home';
import Footer from './layout/footer';

import SearchResults from './components/searchResults';
import ProductList from './components/productList';
import ProductDetail from './components/productDetail';

import BestHomeProvider from './context/provider';

function App() {
  return (
    <main className="app">
      <Router>
        <BestHomeProvider>
          <Header />
          <Switch>
            <Route path={'/search'}>
              <SearchResults />
            </Route>
            <Route path={['/products', `/products?category`]}>
              <ProductList />
            </Route>
            <Route path={'/product/:productId'}>
              <ProductDetail />
            </Route>
            <Route path={['/', '/home']}>
              <Home />
            </Route>
          </Switch>
        </BestHomeProvider>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
