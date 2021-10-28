import React from 'react';
import styles from './productCard.module.css'
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function ProductCard({ product, categoriesMap }) {
  const { data } = product;
  const { mainimage } = data;

  return (
    <div className={styles.container}>
      <Link to={`product/${product.id}`}>
        <img
          src={mainimage.url}
          alt={mainimage.alt}
          height={mainimage.dimensions.height / 3 }
          width={mainimage.dimensions.width / 3 } />

        <h3>{data.name}</h3>

        <div className={styles.details}>
          <p className={styles.category}>
            <b>{categoriesMap.get(data.category.id)}</b>
          </p>
          <p><b>${data.price.toFixed(2)}</b></p>
        </div>
      </Link>
    </div>
  );
}

ProductCard.propTypes = {
  product: propTypes.shape({
    data: propTypes.shape({
      name: propTypes.string.isRequired,
      href: propTypes.string,
      mainimage: propTypes.shape({
        alt: propTypes.string,
        dimensions: propTypes.shape({
          height: propTypes.number,
          width: propTypes.number
        }),
        url: propTypes.string.isRequired,
      }),
      category: propTypes.shape({
        id: propTypes.string,
      }),
      price: propTypes.number
    })
  }),
  categoriesMap: propTypes.object.isRequired
};

export default ProductCard;