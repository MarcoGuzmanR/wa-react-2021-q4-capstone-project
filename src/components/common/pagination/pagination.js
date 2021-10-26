import React from 'react';
import styles from './pagination.module.css';

function Pagination() {
  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <a href="/">&laquo;</a>
        <a className={styles.active} href="/">1</a>
        <a href="/">2</a>
        <a href="/">3</a>
        <a href="/">4</a>
        <a href="/">5</a>
        <a href="/">6</a>
        <a href="/">&raquo;</a>
      </div>
    </div>
  );
}

Pagination.propTypes = {};

export default Pagination;