import React from 'react';
import styles from './searchListProducts.module.css'
import ProductRow from '../productRow/productRow';
import propTypes from 'prop-types';

function SearchListProducts({ productsList, searchTerm }) {
  return (
    <div className={styles.container}>
      <h2>Search Results</h2>
      {productsList.length ?
        <div className={styles['results']}>
          <h3>Products found for: <b>"{searchTerm}"</b></h3>
          {productsList.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </div> :
        <div className={styles['no-results']}>
          <h3>No products found for: <b>{searchTerm}</b></h3>
          <h3>Please, try again!</h3>
        </div>
      }
    </div>
  );
}

SearchListProducts.propTypes = {
  productsList: propTypes.array.isRequired,
  searchTerm: propTypes.string.isRequired
};

export default SearchListProducts;