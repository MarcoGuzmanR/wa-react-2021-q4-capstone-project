import React from 'react';
import propTypes from 'prop-types';
import SimpleImageSlider from "react-simple-image-slider";

function BannerSlider({ bannersList }) {
  const images = bannersList.map((banner) => {
    return {
      url: banner.data.main_image.url
    };
  });

  return (
    <div>
      <SimpleImageSlider
        width={'100%'}
        height={705}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

BannerSlider.propTypes = {
  bannersList: propTypes.array.isRequired
};

export default BannerSlider;