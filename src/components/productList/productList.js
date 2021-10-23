import React from 'react';
import styles from './productList.module.css';
import ProductsGrid from '../productsGrid';
import CategoryFilters from '../categoryFilters';
import LoaderSpinner from '../common/loaderSpinner';
import Pagination from '../common/pagination';
import productCategoriesRawData from '../../mocks/en-us/product-categories.json';
import productsRawData from '../../mocks/en-us/products.json';

function getFilteredCategoryIds(categoryFilters) {
  const filtersApplied =
    categoryFilters.filter(filter => filter.activeFilter === true);

  return filtersApplied.map(filter => filter.id);
}

function ProductList() {
  const { results: mockedCategories } = productCategoriesRawData;
  const { results: mockedProducts } = productsRawData;

  const [isLoading, setIsLoading] = React.useState(true);
  const [products, setProducts] = React.useState(mockedProducts);
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
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  React.useEffect(() => {
    const filterCategoryIds = getFilteredCategoryIds(categoryFilters);

    if (filterCategoryIds.length) {
      const filteredProducts = mockedProducts.filter((product) => {
        return filterCategoryIds.includes(product.data.category.id);
      });

      return setProducts(filteredProducts);
    }

    setProducts(mockedProducts);
  }, [categoryFilters, mockedProducts]);

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
        {isLoading ?
          <LoaderSpinner title="Products" /> :
          <React.Fragment>
            <ProductsGrid title="Products" productsList={products} />
            <Pagination />
          </React.Fragment>
        }
      </section>
    </div>
  );
}

ProductList.propTypes = {};

export default ProductList;