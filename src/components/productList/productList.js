import React from 'react';
import styles from './productList.module.css';
import ProductsGrid from '../productsGrid';
import CategoryFilters from '../categoryFilters';
import productCategoriesRawData from '../../mocks/en-us/product-categories.json';
import productsRawData from '../../mocks/en-us/products.json';

function getFilterIds(filters) {
  return filters.map(filter => filter.id);
}

function ProductList() {
  const { results: mockedCategories } = productCategoriesRawData;
  const { results: mockedProducts } = productsRawData;

  const [products, setProducts] = React.useState(mockedProducts);
  const [filters, setFilters] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
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
    const filterIds = getFilterIds(filters);

    if (filterIds.length) {
      const filteredProducts = mockedProducts.filter((product) => {
        return filterIds.includes(product.data.category.id);
      });

      return setProducts(filteredProducts);
    }

    setProducts(mockedProducts);
  }, [filters, mockedProducts]);

  return (
    <div className={styles.container}>
      <aside>
        <CategoryFilters
          categoryFilters={categoryFilters}
          setCategoryFilters={setCategoryFilters}
          setFilters={setFilters}
        />
      </aside>
      <section>
        {isLoading ?
          <h3>Loading Products</h3> :
          <ProductsGrid title="Products" productsList={products} />
        }
      </section>
    </div>
  );
}

ProductList.propTypes = {};

export default ProductList;