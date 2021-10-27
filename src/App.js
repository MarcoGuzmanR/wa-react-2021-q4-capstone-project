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

import ProductList from './components/productList';

function App() {
  return (
    <main className="app">
      <Router>
        <Header />
        <Switch>
          <Route path={['/products', `/products?category={categorySlug}`]}>
            <ProductList />
          </Route>
          <Route path={['/', '/home']}>
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
