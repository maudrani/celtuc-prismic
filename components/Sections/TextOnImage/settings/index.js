// DEFAULT VALUES
const MAIN = {
  parent: {
    width: 100,
    align_y: 'center',
  },
  text_padding: {
    p_t: { main: 2 },
    p_b: { main: 2 },
  },
  text_container: {
    width: 100,
    align_y: 'center',
    p_t: { main: 1.5, md: '0' },
    p_b: { main: 1.5, md: '0' },
  },
  img_container: {
    height: 100,
    width: 100,
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

//Text size

//DIRECTION
const CENTER = {
  parent: {
    align_x: 'center',
  },
  text_padding: {
    p_b: { main: 2 },
  },
  text_container: {
    align_x: 'center',
    p_r: {main: 1, md: '20px' },
    p_l: {main: 1, md: '20px' },
  },
};

const LEFT = {
  parent: {
    align_x: 'left',
  },
  text_padding: {
    p_r: { main: 1, md: 0.5 },
    p_l: { main: 3, md: 1.5 },
  },
  text_container: {
    p_r: { main: 0.5, md: '30px' },
    p_l: { main: 1.5, md: '20px' },
  },
};

const RIGHT = {
  parent: {
    align_x: 'right',
  },
  text_padding: {
    p_r: { main: 3, md: 1.5 },
    p_l: { main: 1, md: 0.5 },
  },
  text_container: {
    p_r: { main: 1.5, md: '20px' },
    p_l: { main: 0.5, md: '30px' },
  },
};

const SETTINGS = {
  MAIN,
  LG,
  MD,
  SM,
  CENTER,
  LEFT,
  RIGHT,
};

export default SETTINGS;
