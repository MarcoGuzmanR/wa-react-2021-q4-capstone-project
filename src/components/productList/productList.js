import React from 'react';
import styles from './productList.module.css';
import ProductsGrid from '../productsGrid';
import productCategoriesRawData from '../../mocks/en-us/product-categories.json';
import productsRawData from '../../mocks/en-us/products.json';

function getFilterIds(filters) {
  return filters.map(filter => filter.id);
}

function ProductList() {
  const { results: mockedCategories } = productCategoriesRawData;
  const { results: mockedProducts } = productsRawData;

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
  const [filters, setFilters] = React.useState([]);

  function handleFilterChange(filter) {
    setCategoryFilters(prevFilters => {
      return prevFilters.map((prevFilter) => {
        return prevFilter.id === filter.id ?
          { ...prevFilter, activeFilter: !prevFilter.activeFilter } : prevFilter;
      });
    });

    setFilters(prevFilters => {
      const filterApplied = prevFilters.filter(prevFilter => prevFilter.id === filter.id);
      return filterApplied.length ?
        prevFilters.filter(prevFilter => prevFilter.id !== filter.id) : [...prevFilters, filter];
    });
  }

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
        <div className={styles['filter-container']}>
          <h3>Filter by category</h3>
          {categoryFilters.map((filter) => (
            <button
              key={filter.id}
              className={
                filter.activeFilter ?
                `${styles['btn-filter']} ${styles['filter--active']}` :
                `${styles['btn-filter']} ${styles['filter--inactive']}` }
              onClick={() => handleFilterChange(filter)}>
              {filter.name}
            </button>
          ))}
        </div>
      </aside>
      <section>
        <ProductsGrid title="Products" productsList={products} />
      </section>
    </div>
  );
}

ProductList.propTypes = {};

export default ProductList;