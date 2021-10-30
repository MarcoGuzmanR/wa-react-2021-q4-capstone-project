import React from 'react';
import styles from './productRow.module.css'
import propTypes from 'prop-types';

import { useCategories } from '../../hooks/useBestHomeContext';

function ProductRow({ product }) {
  const { categoriesMap } = useCategories();
  return (
    <React.Fragment>
      <div className={styles['product-row']}>
        <div className={styles['image-container']}>
          <img
            src={product.data.mainimage.url}
            alt={product.data.mainimage.alt}
            height={product.data.mainimage.dimensions.height / 4}
            width={product.data.mainimage.dimensions.width / 4}
          />
        </div>
        <div className={styles['details-container']}>
          <h3>{product.data.name}</h3>
          <p><b>Category: </b>{categoriesMap?.get(product.data.category.id)}</p>
          <p><b>Price: </b>${product.data.price.toFixed(2)}</p>
          <p><b>Description: </b>{product.data.short_description}</p>
          <input className="btn-secondary" type="button" value="Add to Cart" />
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

ProductRow.propTypes = {
  product: propTypes.shape({
    data: propTypes.shape({
      name: propTypes.string.isRequired,
      href: propTypes.string,
      price: propTypes.number,
      short_description: propTypes.string,
      main_image: propTypes.shape({
        alt: propTypes.string,
        dimensions: propTypes.shape({
          height: propTypes.number,
          width: propTypes.number
        }),
        url: propTypes.string.isRequired,
      })
    })
  })
};

export default ProductRow;