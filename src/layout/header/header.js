import React from 'react';
import styles from './header.module.css';
import cartIcon from '../../assets/images/cart-15-48.png'
import { Link } from "react-router-dom";

import { useShoppingCart } from '../../hooks/useBestHomeContext';

function Header() {
  const { cartList } = useShoppingCart();
  const [searchTerm, setSearchTerm] = React.useState('');

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <header className={styles.container}>
      <div className={styles['container__menu']}>
        <div className={styles['logo__name-container']}>
          <Link to="/">
            <h2 className={styles['logo__name']}>BestHome</h2>
          </Link>
        </div>
        <nav className={styles['nav-container']}>
          <ul>
            <li>
              <Link to="/">
                <h3>Home</h3>
              </Link>
            </li>
            <li><a href="/">About</a></li>
          </ul>
        </nav>
        <div className={styles['cart-container']}>
          <Link to="/cart">
            <img src={cartIcon} alt="Shopping Cart" />
            <span className={styles['badge-count']}>
              {cartList.length}
            </span>
          </Link>
        </div>
      </div>
      <div className={styles['container__search']}>
        <input
          className={styles['search-product']}
          type="search"
          onChange={handleSearchTerm}
          placeholder="Search products"
        />
        <Link to={`search?q=${searchTerm}`}>
          <input
            className="btn-primary"
            type="button"
            value="Go"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;