import React from 'react';
import styles from './productCard.module.css'

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
      <div className={styles['details']}>
        <p className={styles.category}>{data.category.slug}</p>
        <p>{data.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;