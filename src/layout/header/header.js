import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.container}>
      <header>
        <h2 className={styles.color}>BestHome</h2>
      </header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Product List</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
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