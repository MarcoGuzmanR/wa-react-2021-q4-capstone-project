import React from 'react';
import styles from './searchListProducts.module.css'
import Pagination from '../common/pagination';
import propTypes from 'prop-types';

function SearchListProducts({ productsList, searchTerm }) {
  return (
    <div className={styles.container}>
      <h2>Search Results</h2>
      {productsList.length ?
        <div className={styles['results']}>
          <h3>Products found for: <b>{searchTerm}</b></h3>
          {productsList.map((product) => (
            <div key={product.id} className={styles['product-row']}>
              <img
                src={product.data.mainimage.url}
                alt={product.data.mainimage.alt}
                height={product.data.mainimage.dimensions.height / 4}
                width={product.data.mainimage.dimensions.width / 4}
              />
              <h3>{product.data.name}</h3>
              <p>{product.data.category.id}</p>
              <p>Price: ${product.data.price.toFixed(2)}</p>
              <p>{product.data.short_description}</p>
              <input className="btn-secondary" type="button" value="Add to Cart" />
            </div>
          ))}
          <Pagination />
        </div> :
        <div className={styles['no-results']}>
          <h3>No products found for: <b>{searchTerm}</b></h3>
          <h2>Please, try again!</h2>
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