import React from 'react';
import propTypes from 'prop-types';
import { useCustomResponseAPI } from '../../hooks/useCustomResponseAPI';
import SimpleImageSlider from "react-simple-image-slider";

function BannerSlider() {
  const propsCall = {
    documentType: 'banner',
    pageSize: 5
  };

  const { data, isLoading } = useCustomResponseAPI(propsCall);
  const [images, setImages] = React.useState();

  React.useEffect(() => {
    if (!isLoading) {
      const banners = data.results.map((banner) => ({
        url: banner.data.main_image.url
      }));

      setImages(banners);
    }
  }, [data, isLoading]);

  return (
    <div>
      {!isLoading && images ?
        <SimpleImageSlider
          width={'100%'}
          height={705}
          images={images}
          showBullets={true}
          showNavs={true}
        /> :
        <div>Loading</div>
      }
    </div>
  );
}

BannerSlider.propTypes = {};

export default BannerSlider;