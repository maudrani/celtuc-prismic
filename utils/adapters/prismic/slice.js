export const ParseSliceData = (sliceObj = {}) => {
  delete sliceObj.id;
  delete sliceObj.version;
  delete sliceObj.slice_label;

  return {
    items: sliceObj.items,
    data: sliceObj.primary,
    type: sliceObj.slice_type,
    variant: sliceObj.variation,
  };
};
