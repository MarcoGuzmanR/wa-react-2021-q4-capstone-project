import React from 'react';
import styles from './home.module.css';
import BannerSlider from '../../components/bannerSlider';
import ProductCategories from '../../components/productCategories';
import bannersRawData from '../../mocks/en-us/featured-banners.json';
import productCategoriesRawData from '../../mocks/en-us/product-categories.json';

function Home() {
  const { results: mockedBanners } = bannersRawData;
  const { results: mockedCategories } = productCategoriesRawData;

  return (
    <main className={styles['main-container']}>
      <BannerSlider bannersList={mockedBanners} />
      <ProductCategories categoriesList={mockedCategories} />
      <div>Here are for the featured products</div>
    </main>
  );
}

export default Home;