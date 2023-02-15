const MAIN = {
  wrapper: {
    m_b: 1,
  },
  parent: {
    size: { main: 'xxl', lg: 'xl', md: 'sm' },
    width: 100,
    direction: 'column',
  },
  text_container: {
    p_t: { main: 1.8, lg: 1.4, md: 2.1 },
    p_b: { main: 1.8, lg: 1.4, md: 2.1 },
    p_r: { main: 2, xl: 1, xs: 0 },
    p_l: { main: 2, xl: 1, xs: 0 },

    self_align: 'center',
  },
  img_container: {
    width: 100,

    max_width: { main: 782, xl: 421, md: 277 },

    align_y: 'bottom',
    self_align: { main: 'center' },
  },
};

const top = {
  ...MAIN,
  parent: {
    ...MAIN.parent,
    p_t: { main: 2, lg: 3 },
  },
  text_container: {
    ...MAIN.text_container,
    p_t: { main: 0 },
    p_b: { main: 1, lg: 1.4, md: 2.1 },
  },
};

const bottom = {
  ...MAIN,

  parent: {
    ...MAIN.parent,
    direction: 'column-reverse',

    p_b: { main: 2, lg: 3 },
  },

  text_container: {
    ...MAIN.text_container,
    p_t: { main: 2, lg: 2.5 },
    p_b: { main: 0 },
  },

  img_container: {
    ...MAIN.img_container,
    align_y: 'top',
  },
};

const left = {
  ...MAIN,

  parent: {
    ...MAIN.parent,
    direction: { main: 'row', lg: 'column' },
    gap: { main: 2, xl: 0.5, md: 0 },

    p_t: { lg: 1.8 },

    align_y: 'center',
    align_x: 'center',
  },

  text_container: {
    ...MAIN.text_container,
    p_b: { main: 1.8, lg: 1.4, md: 2.1 },
    p_t: { main: 1.8, lg: 1.4, md: 2.1 },
    p_r: { main: 0.5, xl: 1, xs: 0 },
    p_l: { main: 0.5, xl: 1, xs: 0 },
  },

  img_container: {
    ...MAIN.img_container,
    width: 100,
    max_width: { main: 600, xl: 600, md: 421 },
    self_align: { main: 'end', lg: 'center' },
  },
};

const right = {
  ...left,
  parent: {
    ...left.parent,
    direction: { main: 'row-reverse', lg: 'column-reverse' },
    p_b: { lg: 1 },
  },
};

export default {
  top,
  bottom,
  left,
  right,
};
