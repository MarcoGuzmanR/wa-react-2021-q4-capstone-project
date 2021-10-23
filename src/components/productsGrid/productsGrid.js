import React from 'react';
import ProductCard from '../productCard/productCard';
import styles from './productsGrid.module.css';
import propTypes from 'prop-types';
import productCategoriesRawData from '../../mocks/en-us/product-categories.json';


function getCategoriesMap() {
  const { results: mockedCategories } = productCategoriesRawData;
  const categoriesMap = new Map();

  mockedCategories.map(({id, data}) => categoriesMap.set(id, data.name));

  return categoriesMap;
}

function ProductsGrid({ title, productsList }) {
  const categoriesMap = getCategoriesMap();

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles['featured-products__grid']}>
        {productsList.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            categoriesMap={categoriesMap} />
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