import React from 'react';
import styles from './categoryCard.module.css'
import propTypes from 'prop-types';

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

CategoryCard.propTypes = {
  category: propTypes.shape({
    data: propTypes.shape({
      name: propTypes.string.isRequired,
      href: propTypes.string,
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

export default CategoryCard;