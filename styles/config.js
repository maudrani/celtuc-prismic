// 1 - CORE PALETTE
const COLOR_PALETTE = {
  concrete: '#F2F2F2',
  whisper: '#FBFBFD',
  'athens-gray': '#F5F5F7',
  alabaster: '#F9F9F9',
  black: '#000000',
  white: '#ffffff',
  shark: '#1d1d1f',
  woodsmoke: '#161619',
  'black-russian': '#000008',
  'mine-shaft': '#303030',
  jumbo: '#86868b',
  'mid-gray': '#6E6E73',
  mischka: '#d2d2d7',
  'science-blue': '#0066cc',
  'dodger-blue': '#2997FF',
  heliotrope: '#B344FF',
  'lavender-rose': '#ffb6ff',
  'eastern-blue': '#2CA2B4',
  'havelock-blue': '#5598DE',
  malibu: '#7f87ff',
  'brilliant-rose': '#f65aad',
  cinnabar: '#EC3D43',
  'jacksons-purple': '#1E3791',
  'cerulean-blue': '#2948B1',
  'royal-blue': '#385FDA',
  pomegranate: '#EC3127',
  'whiskey': '#D18D65'
};

// 2 - SEPARATE BETWEEN CATEGORIES
const BACKGROUND_COLORS = {
  'light-1': COLOR_PALETTE.concrete,
  'light-2': COLOR_PALETTE.whisper,
  'light-3': COLOR_PALETTE['athens-gray'],
  'light-4': COLOR_PALETTE.white,
  'light-5': COLOR_PALETTE.alabaster,

  'dark-1': COLOR_PALETTE.black,
  'dark-2': COLOR_PALETTE.shark,
  'dark-3': COLOR_PALETTE.woodsmoke,
  'dark-4': COLOR_PALETTE['black-russian'],
  'dark-5': COLOR_PALETTE.jumbo,

  'accent-1': COLOR_PALETTE['science-blue'],
};

const FONT_COLORS = {
  'light-1': COLOR_PALETTE['athens-gray'],
  'light-2': COLOR_PALETTE.white,
  'light-3': COLOR_PALETTE['mid-gray'],
  'light-4': COLOR_PALETTE.mischka,

  'dark-1': COLOR_PALETTE.shark,
  'dark-2': COLOR_PALETTE.black,
  'dark-3': COLOR_PALETTE.woodsmoke,
  'dark-4': COLOR_PALETTE['black-russian'],
  'dark-5': COLOR_PALETTE.jumbo,

  'link-1': COLOR_PALETTE['dodger-blue'],
  'link-2': COLOR_PALETTE['science-blue'],

  'red-1': COLOR_PALETTE.pomegranate,

  'violet-pink-1': [COLOR_PALETTE.heliotrope, COLOR_PALETTE['lavender-rose']],
  'multicolor-1': [
    COLOR_PALETTE['eastern-blue'],
    COLOR_PALETTE['havelock-blue'],
    COLOR_PALETTE.malibu,
    COLOR_PALETTE['brilliant-rose'],
    COLOR_PALETTE.cinnabar,
  ],
  'purple-blue-1': [
    COLOR_PALETTE['jacksons-purple'],
    COLOR_PALETTE['cerulean-blue'],
    COLOR_PALETTE['royal-blue'],
  ],
};

// 3 - GENERATE THEMES
const THEMES = {
  'content-white-1': {
    background: {
      main: BACKGROUND_COLORS['dark-1'],
      accent: BACKGROUND_COLORS['light-1'],
    },
    font: {
      main: FONT_COLORS['light-1'],
      second: FONT_COLORS['light-3'],
      accent: FONT_COLORS['light-2'],
      button: BACKGROUND_COLORS['dark-1'],
    },
  },
  'content-gray-1': {
    background: {
      main: BACKGROUND_COLORS['light-1'],
      accent: BACKGROUND_COLORS['dark-1'],
    },
    font: {
      main: FONT_COLORS['dark-5'],
      second: FONT_COLORS['dark-1'],
      accent: FONT_COLORS['dark-5'],
      button: BACKGROUND_COLORS['light-3'],
    },
  },
  'dark-1': {
    background: {
      main: BACKGROUND_COLORS['dark-1'],
      accent: BACKGROUND_COLORS['accent-1'],
    },
    font: {
      main: FONT_COLORS['light-1'],
      second: FONT_COLORS['dark-5'],
      accent: FONT_COLORS['link-1'],
      button: BACKGROUND_COLORS['light-1'],
    },
  },
  'light-1': {
    background: {
      main: BACKGROUND_COLORS['light-4'],
      accent: BACKGROUND_COLORS['accent-1'],
    },
    font: {
      main: FONT_COLORS['dark-1'],
      second: FONT_COLORS['light-3'],
      accent: FONT_COLORS['link-2'],
      button: BACKGROUND_COLORS['light-1'],
    },
  },
  'light-2': {
    background: {
      main: BACKGROUND_COLORS['light-2'],
      accent: BACKGROUND_COLORS['accent-1'],
    },
    font: {
      main: FONT_COLORS['dark-1'],
      second: FONT_COLORS['light-3'],
      accent: FONT_COLORS['link-2'],
      button: BACKGROUND_COLORS['light-1'],
    },
  },
  'light-3': {
    background: {
      main: BACKGROUND_COLORS['light-2'],
      accent: BACKGROUND_COLORS['accent-1'],
    },
    font: {
      main: FONT_COLORS['dark-1'],
      second: FONT_COLORS['light-3'],
      accent: FONT_COLORS['light-3'],
      button: BACKGROUND_COLORS['light-1'],
    },
  },
  'red-1': {
    background: {
      main: BACKGROUND_COLORS['light-1'],
      accent: BACKGROUND_COLORS['red-1'],
    },
    font: {
      main: FONT_COLORS['red-1'],
      second: FONT_COLORS['red-1'],
      accent: FONT_COLORS['dark-1'],
      button: BACKGROUND_COLORS['light-1'],
    },
  },
};

export default {
  colors: {
    ...COLOR_PALETTE,
    background: BACKGROUND_COLORS,
    font: FONT_COLORS,
    themes: THEMES,
  },
  sizes: {
    core: 16,
    multiplier: 1.721,
    list: ['xxs', 'xs', 'sm', 'smx', 'md', 'mdx', 'lg', 'xl', 'xlx'],
    defaultSize: 'smx',
  },
  wireframeMode: false,
};
