import React from 'react';
import styles from './header.module.css';
import cartIcon from '../../assets/images/cart-15-48.png'
import propTypes from 'prop-types';

function Header({ setIsHomePage }) {
  function handleHomePageToggle() {
    setIsHomePage(prevValue => !prevValue);
  }

  return (
    <div className={styles.container}>
      <div className={styles['container__menu']}>
        <header className={styles['logo__name-container']} onClick={handleHomePageToggle}>
          <h2 className={styles['logo__name']}>BestHome</h2>
        </header>
        <nav className={styles['nav-container']}>
          <ul>
            <li><a href="/" onClick={handleHomePageToggle}>Home</a></li>
            <li><a href="/">About</a></li>
          </ul>
        </nav>
        <div className={styles['cart-container']}>
          <img src={cartIcon} alt="Shopping Cart" />
        </div>
      </div>
      <div className={styles['container__search']}>
        <form>
          <input
            className={styles['search-product']}
            type="search"
            placeholder="Search products"
          />
          <input
            className="btn-primary"
            type="submit"
            value="Go"
          />
        </form>
      </div>
    </div>
  );
}

Header.propTypes = {
  setIsHomePage: propTypes.func.isRequired,
};

export default Header;