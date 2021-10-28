import React from 'react';
import styles from './productList.module.css';
import ProductsGrid from '../productsGrid';
import CategoryFilters from '../categoryFilters';
import LoaderSpinner from '../common/loaderSpinner';

import { useCustomResponseAPI } from '../../hooks/useCustomResponseAPI';

const propsCategoriesCall = {
  documentType: 'category',
  pageSize: 30
};

const propsProductsCall = {
  documentType: 'product',
  pageSize: 12
};

function getFilteredCategoryIds(categoryFilters) {
  const filtersApplied =
    categoryFilters.filter(filter => filter.activeFilter === true);

  return filtersApplied.map(filter => filter.id);
}

function ProductList() {
  const { data: allCategories, isLoadingCategories } = useCustomResponseAPI(propsCategoriesCall);
  const { data: allProducts, isLoadingProducts } = useCustomResponseAPI(propsProductsCall);
  const [categoryFilters, setCategoryFilters] = React.useState();
  const [products, setProducts] = React.useState();

  React.useEffect(() => {
    if (!isLoadingCategories && allCategories.results) {
      const categories = allCategories.results.map((category) => {
        return {
          id: category.id,
          name: category.data.name,
          activeFilter: false
        }
      });

      setCategoryFilters(categories);
    }
  }, [allCategories, isLoadingCategories]);

  React.useEffect(() => {
    if (!isLoadingProducts) {
      setProducts(allProducts.results);
    }
  }, [allProducts, isLoadingProducts]);

  React.useEffect(() => {
    if (categoryFilters) {
      const filterCategoryIds = getFilteredCategoryIds(categoryFilters);

      if (filterCategoryIds.length) {
        const filteredProducts = allProducts.results.filter((product) => {
          return filterCategoryIds.includes(product.data.category.id);
        });

        return setProducts(filteredProducts);
      }
    }

    setProducts(allProducts.results);
  }, [allProducts, categoryFilters]);

  return (
    <div className={styles.container}>
      <aside>
        {!isLoadingCategories && categoryFilters ?
          <CategoryFilters
            categoryFilters={categoryFilters}
            setCategoryFilters={setCategoryFilters}
            isLoadingCategories={isLoadingCategories}
          /> :
          <LoaderSpinner title="Category Filters" />
        }
      </aside>
      <section>
        {!isLoadingProducts && products ?
          <ProductsGrid title="Products" productsList={products} /> :
          <LoaderSpinner title="Products" />
        }
      </section>
    </div>
  );
}

ProductList.propTypes = {};

export default ProductList;