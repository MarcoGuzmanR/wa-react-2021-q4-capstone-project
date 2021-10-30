import React from 'react';
import styles from './searchResults.module.css'
import SearchListProducts from '../../components/searchListProducts';
import LoaderSpinner from '../common/loaderSpinner';

import { useCustomResponseAPI } from '../../hooks/useCustomResponseAPI';
import { useQuery } from '../../hooks/useQuery';

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

export default SearchResults;