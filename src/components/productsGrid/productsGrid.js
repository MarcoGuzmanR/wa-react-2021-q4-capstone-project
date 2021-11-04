import React from 'react';
import ProductCard from '../productCard/productCard';
import styles from './productsGrid.module.css';
import propTypes from 'prop-types';

function ProductsGrid({ title, productsList }) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles['featured-products__grid']}>
        {productsList.map((product) => (
          <ProductCard
            key={product.id}
            product={product} />
        ))}
      </div>
    </div>
  );
}

ProductsGrid.propTypes = {
  productsList: propTypes.array.isRequired,
  title: propTypes.string.isRequired
};

export default ProductsGrid;