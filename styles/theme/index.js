import CONFIG from "../config.json";
import { GenerateSizesTree } from "./helpers";

const { list, core, multiplier, defaultSize } = CONFIG.sizes;

const theme = {
  colors: CONFIG.colors,
  sizes: GenerateSizesTree(list, core, multiplier, defaultSize).EM(),
  coreSize: (size) => `font-size: ${size}px !important;`,
  limits: {
    pageWidth: "1500px",
  },
};

export default theme;
