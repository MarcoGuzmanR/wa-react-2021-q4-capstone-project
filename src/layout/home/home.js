import React from 'react';
import styles from './home.module.css';
import propTypes from 'prop-types';

import BannerSlider from '../../components/bannerSlider';
import ProductCategories from '../../components/productCategories';
import FeaturedProducts from '../../components/productsGrid';

import productCategoriesRawData from '../../mocks/en-us/product-categories.json';
import featuredProductsRawData from '../../mocks/en-us/featured-products.json';

function Home() {
  const { results: mockedCategories } = productCategoriesRawData;
  const { results: mockedProducts }   = featuredProductsRawData;

  return (
    <div className={styles['main__container']}>
      <BannerSlider />
      <ProductCategories categoriesList={mockedCategories} />
      <FeaturedProducts title="Featured Products" productsList={mockedProducts} />

      <div className={styles['view-products__container']}>
        <button className="btn-secondary" type="button">
          View all products
        </button>
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;