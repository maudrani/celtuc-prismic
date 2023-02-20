const MAIN = {
  wrapper: {
    p_r:{main: '5vw' ,sm: '20px'},
    p_l:{main: '5vw' ,sm: '20px'},
  },
  parent: {
    width: 100,
    direction: 'column',

    align_y: 'center',
    align_x: 'center',
  },
  text_padding: {},
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

const LEFT = {
  parent: {
    align_x: 'left',
  },

  text_padding: {},
};

const RIGHT = {
  parent: {
    align_x: 'right',
  },

  text_padding: {},
};

const SETTINGS = {
  MAIN,
  LG,
  MD,
  SM,
  LEFT,
  RIGHT,
};

export default SETTINGS;
