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

  return (
    <div className={styles.container}>
      <aside>
        {categoryFilters.map(({id, name}) => (
          <div key={id} className={styles['filter-container']}>
            <button className="btn-secondary">{name}</button>
          </div>
        ))}
      </aside>
      <section>
        <ProductsGrid title="Products" productsList={mockedProducts} />
      </section>
    </div>
  );
}

ProductList.propTypes = {};

export default ProductList;