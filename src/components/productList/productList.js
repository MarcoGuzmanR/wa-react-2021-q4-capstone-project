import React from 'react';
import styles from './productList.module.css';
import ProductsGrid from '../productsGrid';
import CategoryFilters from '../categoryFilters';
import LoaderSpinner from '../common/loaderSpinner';

import { useCustomResponseAPI } from '../../hooks/useCustomResponseAPI';
import productCategoriesRawData from '../../mocks/en-us/product-categories.json';

const propsCall = {
  documentType: 'product',
  pageSize: 12
};

function getFilteredCategoryIds(categoryFilters) {
  const filtersApplied =
    categoryFilters.filter(filter => filter.activeFilter === true);

  return filtersApplied.map(filter => filter.id);
}

function ProductList() {
  const { results: mockedCategories } = productCategoriesRawData;

  const { data: allProducts, isLoading } = useCustomResponseAPI(propsCall);
  const [products, setProducts] = React.useState();
  const [categoryFilters, setCategoryFilters] = React.useState(() => {
    return mockedCategories.map((category) => {
      return {
        id: category.id,
        name: category.data.name,
        activeFilter: false
      }
    });
  });

  React.useEffect(() => {
    if (!isLoading) {
      setProducts(allProducts.results);
    }
  }, [allProducts, isLoading]);

  React.useEffect(() => {
    const filterCategoryIds = getFilteredCategoryIds(categoryFilters);

    if (filterCategoryIds.length) {
      const filteredProducts = allProducts.results.filter((product) => {
        return filterCategoryIds.includes(product.data.category.id);
      });

      return setProducts(filteredProducts);
    }

    setProducts(allProducts.results);
  }, [categoryFilters, allProducts]);

  return (
    <div className={styles.container}>
      <aside>
        <CategoryFilters
          categoryFilters={categoryFilters}
          setCategoryFilters={setCategoryFilters}
          isLoadingProducts={isLoading}
        />
      </aside>
      <section>
        {!isLoading && products ?
          <ProductsGrid title="Products" productsList={products} /> :
          <LoaderSpinner title="Products" />
        }
      </section>
    </div>
  );
}

ProductList.propTypes = {};

export default ProductList;