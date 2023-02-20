const MAIN = {
  parent: {
    width: 100,
    direction: 'column',
  },
  text_padding: {
    p_t: { main: 1.8, lg: 1.4, md: '17px' },
    p_b: { main: 1.8, lg: 1.4, md: '34px' },
    p_r: { main: 2, xl: 1, lg: '34px', md: '17px', sm: '0' },
    p_l: { main: 2, xl: 1, lg: '34px', md: '17px', sm: '0' },
    self_align: 'center',
  },
  img_container: {
    width: 100,

    max_width: { main: 782, xl: 421, md: 277 },

    align_y: 'bottom',
    self_align: { main: 'center' },
  },
};

//SIZES
const LG = {
  parent: {
    min_height: { main: '47.88em', lg: 630, md: 550 },
  },
  text_container: {
    size: '1em',
  },
};

const MD = {
  parent: {
    min_height: { main: '34.35em', lg: 400 },
  },
  text_container: {
    size: '1em',
  },
};

const SM = {
  parent: {
    min_height: { main: '22.5em', lg: 290 },
  },
  text_container: {
    size: '1em',
  },
};

// Directions
const TOP = {
  ...MAIN,
  parent: {
    ...MAIN.parent,
  },
  text_padding: {
    ...MAIN.text_padding,

    p_b: { main: 4, lg: 2, md: '42px' },
    p_t: { main: 2, md: '17px' },
  },
};

const BOTTOM = {
  ...MAIN,

  parent: {
    ...MAIN.parent,
    direction: 'column-reverse',

    p_b: { main: 5, lg: 4, md: '51px' },
  },

  text_padding: {
    ...MAIN.text_padding,
    p_t: { main: 4, lg: 2, md: '42px' },
    p_b: { main: 2, md: '17px' },
  },

  img_container: {
    ...MAIN.img_container,
    align_y: 'top',
  },
};

const LEFT = {
  ...MAIN,

  parent: {
    ...MAIN.parent,
    direction: { main: 'row', lg: 'column' },
    gap: { main: '5e,', xl: '0.5em', md: '0em' },

    align_y: 'center',
    align_x: 'center',

    p_t: { lg: 2 },
  },

  text_padding: {
    ...MAIN.text_padding,
    p_b: { main: 1, lg: 2 },
    p_t: { main: 1 },
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

const RIGHT = {
  ...LEFT,
  parent: {
    ...LEFT.parent,
    direction: { main: 'row-reverse', lg: 'column-reverse' },
    p_t: {},
    p_b: { lg: 4, md: '33px' },
  },

  text_padding: {
    ...LEFT.text_padding,
    p_t: { main: 2, lg: 3 },
    p_b: { main: 2, lg: 3 },
  },

  img_container: {
    ...LEFT.img_container,
    self_align: { main: 'start', lg: 'center' },
  },
};

const SETTINGS = {
  MAIN,
  LG,
  MD,
  SM,
  TOP,
  BOTTOM,
  LEFT,
  RIGHT,
};

export default SETTINGS;
