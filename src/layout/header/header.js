import React from 'react';
import styles from './header.module.css';
import cartIcon from '../../assets/images/cart-15-48.png'

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles['container__menu']}>
        <header className={styles['logo__name-container']}>
          <h2 className={styles['logo__name']}>BestHome</h2>
        </header>
        <nav className={styles['nav-container']}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Product List</a></li>
            <li><a href="/">About</a></li>
          </ul>
        </nav>
        <div className={styles['cart-container']}>
          <img src={cartIcon} alt="Shopping Cart" />
        </div>
      </div>
      <div>
        <form>
          <input type="search" placeholder="Search" />
          <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
}

export default Header;