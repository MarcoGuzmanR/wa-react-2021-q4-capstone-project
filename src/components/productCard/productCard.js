import React from 'react';
import styles from './productCard.module.css'
import propTypes from 'prop-types';

function ProductCard({ product }) {
  const { data } = product;
  const { mainimage } = data;

  return (
    <div className={styles.container}>
      <a href={product.href}>
        <img
          src={mainimage.url}
          alt={mainimage.alt}
          height={mainimage.dimensions.height / 3 }
          width={mainimage.dimensions.width / 3 } />
        <h3>{data.name}</h3>
      </a>
      <div className={styles.details}>
        <p className={styles.category}>
          <b>{data.category.slug}</b>
        </p>
        <p><b>${data.price}</b></p>
      </div>
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
        slug: propTypes.string,
      }),
      price: propTypes.number
    })
  })
};

export default ProductCard;