import React from 'react';
import styles from './productList.module.css';

function ProductList() {
  return (
    <div className={styles.container}>
      <h2>This is the Product List Page</h2>
    </div>
  );
}

ProductList.propTypes = {};

export default ProductList;