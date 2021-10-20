import React from 'react';
import styles from './home.module.css';
import propTypes from 'prop-types';

import BannerSlider from '../../components/bannerSlider';
import ProductCategories from '../../components/productCategories';
import FeaturedProducts from '../../components/productsGrid';

import bannersRawData from '../../mocks/en-us/featured-banners.json';
import productCategoriesRawData from '../../mocks/en-us/product-categories.json';
import featuredProductsRawData from '../../mocks/en-us/featured-products.json';

function Home({ setCurrentPage }) {
  const { results: mockedBanners }    = bannersRawData;
  const { results: mockedCategories } = productCategoriesRawData;
  const { results: mockedProducts }   = featuredProductsRawData;

  function handleSetCurrentPage() {
    setCurrentPage('productList');
  }

  return (
    <div className={styles['main__container']}>
      <BannerSlider bannersList={mockedBanners} />
      <ProductCategories categoriesList={mockedCategories} />
      <FeaturedProducts title="Featured Products" productsList={mockedProducts} />

      <div className={styles['view-products__container']}>
        <button className="btn-secondary" type="button" onClick={handleSetCurrentPage}>
          View all products
        </button>
      </div>
    </div>
  );
}

Home.propTypes = {
  setCurrentPage: propTypes.func.isRequired,
};

export default Home;