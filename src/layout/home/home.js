import React from 'react';
import styles from './home.module.css';
import { Link } from "react-router-dom";

import BannerSlider from '../../components/bannerSlider';
import ProductCategories from '../../components/productCategories';
import FeaturedProducts from '../../components/productsGrid';
import LoaderSpinner from '../../components/common/loaderSpinner';

import { useCustomResponseAPI } from '../../hooks/useCustomResponseAPI';

const propsCall = {
  documentType: 'product',
  documentTags: ['Featured'],
  pageSize: 16
};

function Home() {
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
        <Link to="/products">
          <button className="btn-secondary" type="button">
            View all products
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;