import React from 'react';
import CategoryCard from '../categoryCard';
import { useCustomResponseAPI } from '../../hooks/useCustomResponseAPI';
import styles from './productCategories.module.css';
import propTypes from 'prop-types';

function ProductCategories() {
  const propsCall = {
    documentType: 'category',
    pageSize: 30
  };

  const { data, isLoading } = useCustomResponseAPI(propsCall);
  const [categoriesList, setCategoriesList] = React.useState();

  React.useEffect(() => {
    if (!isLoading) {
      setCategoriesList(data.results);
    }
  }, [data, isLoading]);

  return (
    <div className={styles.container}>
      <h2>Product Categories</h2>
      <div className={styles['categories__grid']}>
        {!isLoading && categoriesList ?
          categoriesList.map((category) => (
            <CategoryCard key={category.id} category={category} />
          )) :
          <div>Loading...</div>
        }
      </div>
    </div>
  );
}

ProductCategories.propTypes = {};

export default ProductCategories;