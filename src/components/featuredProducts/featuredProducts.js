import React from 'react';
import ProductCard from '../productCard/productCard';
import styles from './featuredProducts.module.css';
import propTypes from 'prop-types';

function FeaturedProducts({ productsList }) {
  return (
    <div className={styles.container}>
      <h2>Featured Products</h2>
      <div className={styles['featured-products__grid']}>
        {productsList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

FeaturedProducts.propTypes = {
  productsList: propTypes.array.isRequired
};

export default FeaturedProducts;