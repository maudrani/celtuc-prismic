export const GetImageMeta = async (url) => {
  const img = new Image();
  img.src = url;
  await img.decode();
  return img;
};
