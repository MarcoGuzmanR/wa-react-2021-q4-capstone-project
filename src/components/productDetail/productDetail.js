import React from 'react';
import styles from './productDetail.module.css'
import LoaderSpinner from '../common/loaderSpinner';
import ImageGallery from '../common/imageGallery/imageGallery';
import { useParams } from 'react-router-dom';

import { useCategories } from '../../hooks/useBestHomeContext';
import { useCustomResponseAPI } from '../../hooks/useCustomResponseAPI';

function ProductDetail() {
  const { categoriesMap } = useCategories();
  const { productId } = useParams();
  const propsCall = { productId };

  const { data, isLoading } = useCustomResponseAPI(propsCall);
  const [product, setProduct] = React.useState();

  React.useEffect(() => {
    if (isLoading) {
      return;
    }

    setProduct(data.results[0]);
  }, [data, isLoading]);

  return (
    <div className={styles.container}>
      {!isLoading && product ?
        <div className={styles['main-container']}>
          <h1>{product.data.name}</h1>
          <div className={styles['top-container']}>
            <div className={styles['gallery-container']}>
              <ImageGallery pictures={product.data.images} />
            </div>
            <div className={styles['details-container']}>
              <p>
                <label htmlFor="price">
                  <b>Price:</b> ${product.data.price.toFixed(2)}
                </label>
              </p>
              <p>
                <label htmlFor="sku">
                <b>SKU:</b> {product.data.sku}</label>
              </p>
              <p>
                <label htmlFor="category">
                  <b>Category: </b>{categoriesMap?.get(product.data.category.id)}
                </label>
              </p>
              <p>
                <label htmlFor="tags"><b>Tags: </b></label>
                {product.tags.map((tag, index) => (
                  <label className={styles['product-tag']} key={index}>{tag}</label>
                ))}
              </p>
              <p>
                <label>
                  <b>Description: </b>{product.data.description[0].text}
                </label>
              </p>
              <label htmlFor="numberItems"><b>Quantity: </b></label>
              <input className={styles['number-items--input']} name="numberItems" type="number" />
              <input className={`btn-cart ${styles['btn-cart--custom']}`} type="button" value="Add to Cart" />
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