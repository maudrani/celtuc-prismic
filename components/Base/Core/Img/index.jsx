import Image from 'next/image';
import { CustomDynamicPanel, ImageContainer } from './styled';
import { useCallback, useEffect, useState } from 'react';
import { GetImageMeta } from 'utils/images/data';
import {
  GetBlurProps,
  GetContainerSizeObj,
  GetResizedData,
  GetSizeProps,
  no_image_url,
  ParseImgProps,
} from './adapters';

function Img(props) {
  const [imgData, setImgData] = useState(ParseImgProps(props));
  const { getImgData = () => {} } = props;

  const imageContainerRef = useCallback((containerNode) => {
    if (containerNode !== null) {
      const GetImageData = async () => {
        const containerSize = GetContainerSizeObj(containerNode);
        const imgMeta = await GetImageMeta(imgData.src);

        if (!imgMeta) {
          setImgData((prev) => ({
            ...prev,
            src: no_image_url,
            ...GetSizeProps(containerSize),
            ...GetBlurProps(containerSize),
          }));

          return;
        }

        const { img, blur } = GetResizedData(imgMeta, containerSize);
        setImgData((prev) => ({
          ...prev,
          ...img,
          ...GetBlurProps(blur),
        }));
      };

      GetImageData();
    }
  }, []);

  useEffect(() => {
    if (getImgData && imgData) getImgData(imgData);
  }, [imgData]);

  return (
    <CustomDynamicPanel forwardedAs={'div'}>
      <ImageContainer ref={imageContainerRef}>
        <Image {...imgData} />
      </ImageContainer>
    </CustomDynamicPanel>
  );
}

export default Img;
