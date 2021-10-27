import React from 'react';
import styles from './home.module.css';
import propTypes from 'prop-types';

import BannerSlider from '../../components/bannerSlider';
import ProductCategories from '../../components/productCategories';
import FeaturedProducts from '../../components/productsGrid';
import LoaderSpinner from '../../components/common/loaderSpinner';

import { useCustomResponseAPI } from '../../hooks/useCustomResponseAPI';

function Home() {
  const propsCall = {
    documentType: 'product',
    documentTags: ['Featured'],
    pageSize: 16
  };

  const { data, isLoading } = useCustomResponseAPI(propsCall);
  const [featuredProducts, setFeaturedProducts] = React.useState();

  React.useEffect(() => {
    if (!isLoading) {
      setFeaturedProducts(data.results);
    }
  }, [data, isLoading]);

  return (
    <div className={styles['main__container']}>
      <BannerSlider />
      <ProductCategories />

      {!isLoading && featuredProducts ?
        <FeaturedProducts title="Featured Products" productsList={featuredProducts} /> :
        <LoaderSpinner title="Featured Products" />
      }

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