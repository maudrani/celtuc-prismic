import { ORIENTATION_NAMES, THEME_NAMES } from 'constants/styles';

const hasText = (data = {}) =>
  data.top_text || data.title || data.description?.text || data.bottom_text;
const hasImage = (image) => image?.url;

const parseTheme = (theme) =>
  ({
    dark: THEME_NAMES.dark,
    light: THEME_NAMES.light,
    'mid-light': THEME_NAMES['mid-light'],
  }[theme] || THEME_NAMES.dark);

const parseOrientation = (orientation) =>
  ({
    right: ORIENTATION_NAMES.right,
    left: ORIENTATION_NAMES.left,
  }[orientation] || ORIENTATION_NAMES.right);

export const parseProps = (data = {}) => ({
  size: data.size,
  top_text: data.top_text,
  title: data.title,
  description: data.description,
  image: data.image,
  bottom_text: data.bottom_text,
  theme: parseTheme(data.theme),
  orientation: parseOrientation(data.orientation),
  showImage: hasImage(data.image),
  showText: hasText(data),
});

export const imgUrlByBreakpoint = (imageObj, breakpoint, breakpointTrigger) =>
  imageObj
    ? !breakpointTrigger
      ? imageObj.url
      : imageObj[breakpoint]?.url
    : '';
