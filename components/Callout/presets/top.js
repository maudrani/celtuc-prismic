export default {
  general: {
    theme: 'dark-1',
  },
  wrapper: {
    width: 100,
  },
  parent: {
    size: { main: 'xxl', xxl: 'xl', md: 'sm' },

    width: 100,
    height: 100,
    min_height: 670,

    align_y: 'bottom',
    align_x: 'center',

    gap: {
      main: 0,
      lg: 0,
    },
  },
  text_container: {
    p_t: { main: 1, xs: '5vw' },
    p_b: { main: 0, xs: 0 },
    p_r: { main: 2, xs: 0 },
    p_l: { main: 2, xs: 0 },

    height: 100,
    min_height: 336,

    align_y: 'center',
    align_x: 'center',
  },
  img_container: {
    size: 'sm',

    height: 100,
    min_height: 336,

    width: 100,
    max_width: { main: 782, lg: '75%', md: 277 },

    align_y: 'bottom',

    p_t: {
      main: 0,
      md: 0,
    },
  },
};
