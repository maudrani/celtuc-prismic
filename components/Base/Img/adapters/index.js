import getShimmerPath from 'utils/images/blur';
const defaultValues = {
  alt: 'Img',
  width: 1,
  height: 1,
  placeholder: 'blur',
};

export const GetMainProps = (props) => ({
  src: props.src,
  alt: props.alt || defaultValues.alt,
});

export const GetSizeProps = (props) => ({
  width: props.width || defaultValues.width,
  height: props.height || defaultValues.height,
});

export const GetBlurProps = (props) => ({
  placeholder: props.placeholder || defaultValues.placeholder,
  blurDataURL: getShimmerPath(
    props.width || defaultValues.width,
    props.height || defaultValues.height
  ),
});

export const ParseImgProps = (props) => ({
  ...GetMainProps(props),
  ...GetSizeProps(props),
  ...GetBlurProps(props),
});

export const GetNewSizeByContainer = (imgOBj, containerObj, getBothResized) => {
  const { width: imgWidth, height: imgHeight } = imgOBj;
  const { width: containerWidth, height: containerHeight } = containerObj;

  const resizedHeight = (imgHeight / imgWidth) * containerWidth;
  const resizedWidth = (imgWidth / imgHeight) * containerHeight;

  const newSize = { width: 0, height: 0 };

  if (containerWidth > containerHeight) {
    newSize.width = containerWidth;
    newSize.height = resizedHeight;
  }

  if (containerHeight > containerWidth) {
    newSize.width = resizedWidth;
    newSize.height = containerHeight;
  }

  if (containerWidth == containerHeight || getBothResized) {
    newSize.width = resizedWidth;
    newSize.height = resizedHeight;
  }

  return newSize;
};

export const GetContainerSizeObj = (containerNode) => ({
  width: containerNode.offsetWidth,
  height: containerNode.offsetHeight,
});

export const GetResizedData = (imgSizeObj, containerSizeObj) => ({
  img: GetNewSizeByContainer(imgSizeObj, containerSizeObj),
  blur: GetNewSizeByContainer(imgSizeObj, containerSizeObj, true),
});

export const no_image_url = '/img/static/placeholders/image-not-found.webp';
