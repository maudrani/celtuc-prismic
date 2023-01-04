import Image from 'next/image';
import { CustomDynamicPanel, ImageContainer } from './styled';
import { useCallback, useState } from 'react';
import { GetImageMeta } from 'utils/images/data';
import { GetNewSizeByContainer } from './adapters';
import getShimmerPath from 'utils/images/blur';

function Img(props) {
  const [imgData, setImgData] = useState({
    src: props.src || '/img/photos/test-image.webp',
    alt: props.alt || 'Img',
    width: 1,
    height: 1,
    blurPlaceholder: {
      width: 1,
      height: 1,
    },
  });

  const imageContainerRef = useCallback((node) => {
    if (node !== null) {
      GetImageMeta(imgData.src).then((imageData) => {
        const containerObj = {
          width: node.offsetWidth,
          height: node.offsetHeight,
        };

        const newImgSize = GetNewSizeByContainer(imageData, containerObj);

        const blurPlaceholderSize = GetNewSizeByContainer(
          imageData,
          containerObj,
          true
        );

        setImgData({
          ...imgData,
          ...newImgSize,
          blurPlaceholder: { ...blurPlaceholderSize },
        });
      });
    }
  }, []);

  return (
    <CustomDynamicPanel forwardedAs={'div'}>
      <ImageContainer ref={imageContainerRef}>
        <Image
          {...imgData}
          placeholder="blur"
          blurDataURL={getShimmerPath(
            imgData.blurPlaceholder.width,
            imgData.blurPlaceholder.height
          )}
        />
      </ImageContainer>
    </CustomDynamicPanel>
  );
}

export default Img;
