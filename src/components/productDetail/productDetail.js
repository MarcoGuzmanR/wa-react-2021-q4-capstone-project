import React from 'react';
import styles from './productDetail.module.css'
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';

import { useCustomResponseAPI } from '../../hooks/useCustomResponseAPI';

function ProductDetail() {
  const { productId } = useParams();
  const propsCall = { productId };

  const { data, isLoading } = useCustomResponseAPI(propsCall);
  const [product, setProduct] = React.useState();

  React.useEffect(() => {
    if (!isLoading) {
      setProduct(data.results[0]);
    }
  }, [data, isLoading]);

  return (
    <div className={styles.container}>
      <pre>{JSON.stringify(product)}</pre>
    </div>
  );
}

ProductDetail.propTypes = {};

export default ProductDetail;