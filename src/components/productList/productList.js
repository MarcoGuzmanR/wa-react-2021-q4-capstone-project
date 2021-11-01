import React from 'react';
import styles from './productList.module.css';
import ProductsGrid from '../productsGrid';
import CategoryFilters from '../categoryFilters';
import Pagination from '../common/pagination';
import LoaderSpinner from '../common/loaderSpinner';

import { useCustomResponseAPI } from '../../hooks/useCustomResponseAPI';
import { useCategories } from '../../hooks/useBestHomeContext';
import { useQuery } from '../../hooks/useQuery';

const propsProductsCall = {
  documentType: 'product',
  pageSize: 12
};

function setCategories(categories, categoryParam) {
  return categories.map((category) => {
    return {
      id: category.id,
      name: category.data.name,
      activeFilter: category.slugs[0] === categoryParam
    }
  });
}

function getFilteredCategoryIds(categoryFilters) {
  const filtersApplied =
    categoryFilters.filter(filter => filter.activeFilter === true);

  return filtersApplied.map(filter => filter.id);
}

function ProductList() {
  const query = useQuery();
  const categoryParam = query.get('category');

  const { categoriesList: allCategories, isLoading: isLoadingCategories } = useCategories();

  const { data: allProducts, isLoadingProducts } = useCustomResponseAPI(propsProductsCall);
  const [categoryFilters, setCategoryFilters] = React.useState();
  const [products, setProducts] = React.useState();
  const [paginationControls, setPaginationControls] = React.useState(() => ({
    page: 0,
    totalPages: 0,
    totalResultsSize: 0
  }));
  const [areFiltersCleared, setAreFiltersCleared] = React.useState(true);

  React.useEffect(() => {
    if (isLoadingCategories && !allCategories.length) {
      return;
    }

    const categories = setCategories(allCategories, categoryParam);
    setCategoryFilters(categories);

  }, [allCategories, categoryParam, isLoadingCategories]);

  React.useEffect(() => {
    if (isLoadingProducts) {
      return;
    }

    setProducts(allProducts.results);
    setPaginationControls({
      page: allProducts.page,
      totalPages: allProducts.total_pages,
      totalResultsSize: allProducts.total_results_size
    });
  }, [allProducts, isLoadingProducts]);

  React.useEffect(() => {
    if (!categoryFilters || !allProducts.results) {
      return;
    }

    const filterCategoryIds = getFilteredCategoryIds(categoryFilters);

    if (filterCategoryIds.length) {
      const filteredProducts = allProducts.results.filter((product) => {
        return filterCategoryIds.includes(product.data.category.id);
      });

      setAreFiltersCleared(false);
      return setProducts(filteredProducts);
    }

    setAreFiltersCleared(true);
    setProducts(allProducts.results);
  }, [allProducts, categoryFilters]);

  return (
    <div className={styles.container}>
      <aside>
        {!isLoadingCategories && categoryFilters ?
          <CategoryFilters
            categoryFilters={categoryFilters}
            setCategoryFilters={setCategoryFilters}
            areFiltersCleared={areFiltersCleared}
            setAreFiltersCleared={setAreFiltersCleared}
            isLoadingCategories={isLoadingCategories}
          /> :
          <LoaderSpinner title="Category Filters" />
        }
      </aside>
      <section>
        {!isLoadingProducts && products ?
          <React.Fragment>
            <ProductsGrid title="Products" productsList={products} />
            <Pagination setProducts={setProducts} paginationControls={paginationControls} />
          </React.Fragment> :
          <LoaderSpinner title="Products" />
        }
      </section>
    </div>
  );
}

ProductList.propTypes = {};

export default ProductList;