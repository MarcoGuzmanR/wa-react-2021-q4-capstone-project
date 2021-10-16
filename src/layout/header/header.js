import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <header>
      <h2 className={styles.color}>Logo</h2>
      <nav>
        <form>
          <input type="search" placeholder="Search" />
          <input type="submit" value="Search" />
        </form>
        <div>Shopping cart icon</div>
      </nav>
    </header>
  );
}

export default Header;