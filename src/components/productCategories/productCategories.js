import React from 'react';
import CategoryCard from '../categoryCard';
import LoaderSpinner from '../../components/common/loaderSpinner';
import styles from './productCategories.module.css';

import { useCategories } from '../../hooks/useBestHomeContext';

function ProductCategories() {
  const { categoriesList, isLoading } = useCategories();

  return (
    <div className={styles.container}>
      <h2>Product Categories</h2>
      <div className={styles['categories__grid']}>
        {!isLoading && categoriesList ?
          categoriesList.map((category) => (
            <CategoryCard key={category.id} category={category} />
          )) :
          <LoaderSpinner title="Product Categories" />
        }
      </div>
    </div>
  );
}

export default ProductCategories;