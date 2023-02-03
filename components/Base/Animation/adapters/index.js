const animation_types = {
  fade_in: 'fade_in',
  typed_text: 'typed_text',
  none: 'none',
};

export const getDataProps = (dataObj={}) => ({
  type: dataObj.type || animation_types.none,
  classToAffect: dataObj.classToAffect
});
