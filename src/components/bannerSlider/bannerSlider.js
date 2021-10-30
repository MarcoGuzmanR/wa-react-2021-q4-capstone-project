import React from 'react';
import LoaderSpinner from '../../components/common/loaderSpinner';
import SimpleImageSlider from "react-simple-image-slider";
import { useCustomResponseAPI } from '../../hooks/useCustomResponseAPI';

const propsCall = {
  documentType: 'banner',
  pageSize: 5
};

function BannerSlider() {
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
          loop={true}
          showBullets={true}
          showNavs={true}
        /> :
        <LoaderSpinner />
      }
    </div>
  );
}

export default BannerSlider;