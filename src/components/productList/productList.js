import React from 'react';
import styles from './productList.module.css';
import ProductsGrid from '../productsGrid';
import productCategoriesRawData from '../../mocks/en-us/product-categories.json';
import productsRawData from '../../mocks/en-us/products.json';

function ProductList() {
  const { results: mockedCategories } = productCategoriesRawData;
  const categoryFilters = mockedCategories.map((category) => {
    return {
      id: category.id,
      name: category.data.name
    }
  });

  const { results: mockedProducts } = productsRawData;

  const [products, setProducts] = React.useState(mockedProducts);
  const [filters, setFilters] = React.useState([]);

  function handleFilterChange(filter) {
    setFilters(prevFilters => {
      const filterApplied = prevFilters.find(prevFilter => prevFilter.id === filter.id);

      if (filterApplied) {
        return prevFilters.filter(prevFilter => prevFilter.id !== filter.id);
      }

      return [...prevFilters, filter];
    });
  }

  React.useEffect(() => {
    const filterIds = filters.map(filter => filter.id);
    const filteredProducts = mockedProducts.filter((product) => {
      return filterIds.includes(product.data.category.id);
    });

    if (filterIds.length) {
      return setProducts(filteredProducts);
    }

    setProducts(mockedProducts);
  }, [filters, mockedProducts]);

  return (
    <div className={styles.container}>
      <aside>
        {categoryFilters.map((filter) => (
          <div key={filter.id} className={styles['filter-container']}>
            <button
              className="btn-secondary"
              onClick={() => handleFilterChange(filter)}>
              {filter.name}
            </button>
          </div>
        ))}
      </aside>
      <section>
        <ProductsGrid title="Products" productsList={products} />
      </section>
    </div>
  );
}

ProductList.propTypes = {};

export default ProductList;