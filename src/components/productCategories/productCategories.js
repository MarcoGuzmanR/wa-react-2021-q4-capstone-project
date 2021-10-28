import React from 'react';
import CategoryCard from '../categoryCard';
import LoaderSpinner from '../../components/common/loaderSpinner';
import { useCustomResponseAPI } from '../../hooks/useCustomResponseAPI';
import styles from './productCategories.module.css';
import propTypes from 'prop-types';

const propsCall = {
  documentType: 'category',
  pageSize: 30
};

function ProductCategories() {
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
          <LoaderSpinner title="Product Categories" />
        }
      </div>
    </div>
  );
}

ProductCategories.propTypes = {};

export default ProductCategories;