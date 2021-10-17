import React from 'react';

function CategoryCard({ category }) {
  const { data } = category;
  const { main_image } = data;

  return (
    <div>
      <img
        src={main_image.url}
        alt={main_image.alt}
        height={main_image.dimensions.height / 3 }
        width={main_image.dimensions.width / 3} />
      <h3>{data.name}</h3>
    </div>
  );
}

export default CategoryCard;