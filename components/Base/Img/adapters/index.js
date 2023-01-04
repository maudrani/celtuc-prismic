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
