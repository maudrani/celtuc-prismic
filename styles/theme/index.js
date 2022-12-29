import CONFIG from '../config.json';
import { breakpoints, query } from './data/breakpoints';
import { GenerateSizesTree } from './helpers';

const { list, core, multiplier, defaultSize } = CONFIG.sizes;

const theme = {
  colors: CONFIG.colors,
  sizes: GenerateSizesTree(list, core, multiplier, defaultSize).EM(),
  coreSize: (size) => `font-size: ${size}px !important;`,
  limits: {
    pageWidth: '1536px',
  },
  breakpoints: { ...breakpoints, ...query },
};

export default theme;
