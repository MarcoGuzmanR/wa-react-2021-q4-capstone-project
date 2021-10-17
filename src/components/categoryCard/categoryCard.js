import React from 'react';
import styles from './categoryCard.module.css'

function CategoryCard({ category }) {
  const { data } = category;
  const { main_image } = data;

  return (
    <div className={styles.container}>
      <a href={category.href}>
        <img
          src={main_image.url}
          alt={main_image.alt}
          height={main_image.dimensions.height / 3 }
          width={main_image.dimensions.width / 3} />
        <h3>{data.name}</h3>
      </a>
    </div>
  );
}

export default CategoryCard;