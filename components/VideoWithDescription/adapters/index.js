import { ORIENTATION_NAMES, THEME_NAMES } from 'constants/styles';

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
    top: ORIENTATION_NAMES.top,
    bottom: ORIENTATION_NAMES.bottom,
  }[orientation] || ORIENTATION_NAMES.right);

const hasText = (data = {}) => data.title || data.description?.text;
const hasVideo = (video) => video?.embed_url;

export const parseProps = (data = {}) => ({
  videoData: {
    url: data.video_url?.embed_url,
    showControls: data.show_video_controls,
    transcript: data.video_transcript && data.video_transcript[0].text,
    thumb: data.video_preview_image,
  },
  title: data.title,
  description: data.description,
  theme: parseTheme(data.theme),
  direction: parseOrientation(data.direction),
  size: data.size,
  showVideo: hasVideo(data.video_url),
  showText: hasText(data),
});

export const imgUrlByBreakpoint = (imageObj, breakpoint, breakpointTrigger) =>
  imageObj
    ? !breakpointTrigger
      ? imageObj.url
      : imageObj[breakpoint]?.url
    : '';
