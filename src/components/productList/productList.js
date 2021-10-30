import React from 'react';
import styles from './productList.module.css';
import ProductsGrid from '../productsGrid';
import CategoryFilters from '../categoryFilters';
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

  React.useEffect(() => {
    if (isLoadingCategories && !allCategories.length) {
      return;
    }

    const categories = setCategories(allCategories, categoryParam);
    setCategoryFilters(categories);

  }, [allCategories, categoryParam, isLoadingCategories]);

  React.useEffect(() => {
    if (!isLoadingProducts) {
      setProducts(allProducts.results);
    }
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

      return setProducts(filteredProducts);
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