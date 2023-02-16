// DEFAULT VALUES
const MAIN = {
  parent: {
    size: { main: 'xxl', lg: 'xl', md: 'sm' },
    width: 100,
    align_y: 'center',
  },
  text_container: {
    width: 100,
    p_t: { main: 1 },
    p_b: { main: 1 },
    align_y: 'center',
  },
  img_container: {
    height: 100,
    width: 100,
  },
};

//SIZES
const LG = {
  parent: {
    min_height: { main: 814, lg: 630, md: 370 },
  },
  text_container: {
    size: '1.4em',
  },
};

const MD = {
  parent: {
    min_height: { main: 584, lg: 400 },
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
  text_container: {
    align_x: 'center',
    p_b: { main: 2 },
  },
};

const LEFT = {
  parent: {
    align_x: 'left',
  },
  text_container: {
    p_r: { main: 1, md: 0.5 },
    p_l: { main: 3, md: 1.5},

    align_x: 'left',
  },
};

const RIGHT = {
  parent: {
    align_x: 'right',
  },
  text_container: {
    p_r: { main: 3, md: 1.5 },
    p_l: { main: 1, md: 0.5 },

    align_x: 'right',
  },
};



const SETTINGS = {
  MAIN,
  LG,
  MD,
  CENTER,
  LEFT,
  RIGHT
};

export default SETTINGS;
