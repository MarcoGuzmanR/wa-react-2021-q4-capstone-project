import React from 'react';
import styles from './searchResults.module.css'
import { useLocation } from 'react-router-dom';
import SearchListProducts from '../../components/searchListProducts';
import LoaderSpinner from '../common/loaderSpinner';
import propTypes from 'prop-types';

import { useCustomResponseAPI } from '../../hooks/useCustomResponseAPI';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get('q');

  const propsCall = {
    documentType: 'product',
    searchTerm,
    pageSize: 20
  };

  const { data, isLoadingProducts } = useCustomResponseAPI(propsCall);
  const [products, setProducts] = React.useState();

  React.useEffect(() => {
    if (isLoadingProducts) {
      return;
    }

    setProducts(data.results);
  }, [data, isLoadingProducts]);

  return (
    <div className={styles.container}>
      {!isLoadingProducts && products ?
        <SearchListProducts productsList={products} searchTerm={searchTerm} /> :
        <LoaderSpinner title="Products" />
      }
    </div>
  );
}

SearchResults.propTypes = {};

export default SearchResults;