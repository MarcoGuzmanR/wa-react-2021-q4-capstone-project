import React from 'react';
import styles from './productDetail.module.css'
import LoaderSpinner from '../common/loaderSpinner';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';

import { useCustomResponseAPI } from '../../hooks/useCustomResponseAPI';

function ProductDetail() {
  const { productId } = useParams();
  const propsCall = { productId };

  const { data, isLoading } = useCustomResponseAPI(propsCall);
  const [product, setProduct] = React.useState();
  console.log(product);

  React.useEffect(() => {
    if (!isLoading) {
      setProduct(data.results[0]);
    }
  }, [data, isLoading]);

  return (
    <div className={styles.container}>
      {!isLoading && product ?
        <div className={styles['main-container']}>
          <div className={styles['top-container']}>
            <div className={styles['gallery-container']}>
              <h2>{product.data.name}</h2>
            </div>
            <div className={styles['details-container']}>
              <label htmlFor="price">Price: ${product.data.price.toFixed(2)}</label>
              <label htmlFor="sku">SKU: {product.data.sku}</label>
              <label htmlFor="category">Category: {product.data.category.id}</label>
              {product.tags.map((tag, index) => (
                <label key={index}>{tag}</label>
              ))}
              <p>{product.data.short_description}</p>
              <label htmlFor="numberItems">Quantity:</label>
              <input name="numberItems" type="number" />
              <input className="btn-secondary" type="button" value="Add to Cart" />
            </div>
          </div>
          <div className={styles['specs-container']}>
            <h3>Specs:</h3>
            <ul>
            {product.data.specs.map((spec, index) => (
              <li key={index}>
                <label><b>{spec.spec_name}:</b> {spec.spec_value}</label>
              </li>
            ))}
            </ul>
          </div>
        </div> :
        <LoaderSpinner />
      }
    </div>
  );
}

ProductDetail.propTypes = {};

export default ProductDetail;