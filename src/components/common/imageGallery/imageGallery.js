import React from 'react';
import styles from './imageGallery.module.css';
import SimpleImageSlider from "react-simple-image-slider";
import propTypes from 'prop-types';

function ImageGallery({ pictures }) {
  const [images] = React.useState(() => {
    return pictures.map((picture) => ({ url: picture.image.url }));
  });

  return (
    <div className={styles.container}>
      <SimpleImageSlider
        autoplay={true}
        height={405}
        images={images}
        loop={true}
        showBullets={true}
        showNavs={true}
        width={'20%'}
      />
    </div>
  );
}

ImageGallery.propTypes = {
  pictures: propTypes.array.isRequired
};

export default ImageGallery;