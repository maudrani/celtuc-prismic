export const GetImageMeta = async (url) => {
  let imageHasError = true;

  const img = new Image();
  img.src = url;
  await img
    .decode()
    .then(() => {
      imageHasError = false;
    })
    .catch(() => {
      imageHasError = true;
    });

  if (imageHasError) return false;

  return img;
};
