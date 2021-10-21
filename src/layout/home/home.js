import React from 'react';
import styles from './home.module.css';

import BannerSlider from '../../components/bannerSlider';
import ProductCategories from '../../components/productCategories';
import FeaturedProducts from '../../components/featuredProducts';

import bannersRawData from '../../mocks/en-us/featured-banners.json';
import productCategoriesRawData from '../../mocks/en-us/product-categories.json';
import featuredProductsRawData from '../../mocks/en-us/featured-products.json';

function Home() {
  const { results: mockedBanners }    = bannersRawData;
  const { results: mockedCategories } = productCategoriesRawData;
  const { results: mockedProducts }   = featuredProductsRawData;

  return (
    <main className={styles['main-container']}>
      <BannerSlider bannersList={mockedBanners} />
      <ProductCategories categoriesList={mockedCategories} />
      <FeaturedProducts productsList={mockedProducts} />
    </main>
  );
}

export default Home;