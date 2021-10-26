import React from 'react';
import styles from './home.module.css';
import propTypes from 'prop-types';

import BannerSlider from '../../components/bannerSlider';
import ProductCategories from '../../components/productCategories';
import FeaturedProducts from '../../components/productsGrid';

import bannersRawData from '../../mocks/en-us/featured-banners.json';
import productCategoriesRawData from '../../mocks/en-us/product-categories.json';
import featuredProductsRawData from '../../mocks/en-us/featured-products.json';

function Home({ setIsHomePage }) {
  const { results: mockedBanners }    = bannersRawData;
  const { results: mockedCategories } = productCategoriesRawData;
  const { results: mockedProducts }   = featuredProductsRawData;

  function handleSetIsHomePage() {
    setIsHomePage(false);
  }

  return (
    <div className={styles['main__container']}>
      <BannerSlider bannersList={mockedBanners} />
      <ProductCategories categoriesList={mockedCategories} />
      <FeaturedProducts title="Featured Products" productsList={mockedProducts} />

      <div className={styles['view-products__container']}>
        <button className="btn-secondary" type="button" onClick={handleSetIsHomePage}>
          View all products
        </button>
      </div>
    </div>
  );
}

Home.propTypes = {
  setIsHomePage: propTypes.func.isRequired,
};

export default Home;