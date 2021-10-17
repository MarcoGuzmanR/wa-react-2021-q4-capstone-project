import React from 'react';
import CategoryCard from '../categoryCard';
import styles from './productCategories.module.css';

function ProductCategories({ categoriesList }) {
  return (
    <div className={styles.container}>
      <h2>Product Categories</h2>
      <div className={styles['categories__grid']}>
        {categoriesList.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default ProductCategories;