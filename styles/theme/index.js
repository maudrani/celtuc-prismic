import CONFIG from '../config.js';
import { breakpoints, query } from './data/breakpoints';
import { GenerateSizesTree } from './helpers';

const { list, core, multiplier, defaultSize } = CONFIG.sizes;

const theme = {
  colors: CONFIG.colors,
  sizes: GenerateSizesTree(list, core, multiplier, defaultSize).EM(),
  coreSize: (size) => `font-size: ${size}px !important;`,
  limits: {
    pageWidth: '1440px',
    get pageWidth_int() {
      return Number(this.pageWidth.replace('px', ''));
    },
  },
  breakpoints: { ...breakpoints, ...query },
};

export default theme;
