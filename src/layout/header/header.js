import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <h2 className={styles.color}>Logo</h2>
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
    </header>
  );
}

export default Header;