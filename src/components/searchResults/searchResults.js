import React from 'react';
import styles from './searchResults.module.css'
import SearchListProducts from '../../components/searchListProducts';
import Pagination from '../common/pagination';
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
  const [paginationControls, setPaginationControls] = React.useState(() => ({
    page: 0,
    totalPages: 0,
    totalResultsSize: 0
  }));

  React.useEffect(() => {
    if (isLoadingProducts) {
      return;
    }

    setProducts(data.results);
    setPaginationControls({
      page: data.page,
      totalPages: data.total_pages,
      totalResultsSize: data.total_results_size
    });
  }, [data, isLoadingProducts]);

  return (
    <div className={styles.container}>
      {!isLoadingProducts && products ?
        <React.Fragment>
          <SearchListProducts productsList={products} searchTerm={searchTerm} />
          <Pagination setProducts={setProducts} paginationControls={paginationControls} />
        </React.Fragment> :
        <LoaderSpinner title="Products" />
      }
    </div>
  );
}

export default SearchResults;