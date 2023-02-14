export default {
  general: {
    theme: 'light-1',
  },
  wrapper: {
    max_width: 'lg',
    p_t: 0.5,
    p_b: 0.5,
  },
  parent: {
    size: { main: 'xxl', lg: 'xl', md: 'sm' },
    p_b: '10px',
    p_t: '10px',
    p_l: '10px',
    p_r: '10px',

    width: 100,
    height: 100,
    min_height: { main: 814, lg: 630, md: 370 },

    align_y: 'center',
    align_x: { main: 'left', sm: 'center' },
  },
  text_container: {
    p_r: { main: 2, md: 0 },
    p_l: { main: 5.5, md: '20%', sm: 0 },
    p_t: { main: '10%' },
    p_b: { main: '10%' },

    align_y: 'center',
    align_x: 'left',
  },
  img_container: {
    size: 'sm',

    height: 100,

    width: 100,
    border_radius: 'xl',

    align_y: 'bottom',
  },
};
