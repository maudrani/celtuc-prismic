import { THEME_SIZES } from "../../constants/styles/index";

const Round = (num, round) => Number(num.toFixed(round || 1));
const RemoveExtension = (size ) =>
  Number(size.replace(THEME_SIZES.REM, "").replace(THEME_SIZES.PX, "").replace(THEME_SIZES.EM, ""));

export const GenerateSizesTree = (
  sizesList,
  core,
  multiplier,
  defaultSize
) => {
  const sizesTree = {};
  const sizesUnderDefault = sizesList.slice(
    0,
    sizesList.indexOf(defaultSize)
  ).length;

  const minSizeValue = () => {
    let idx = sizesUnderDefault;
    let result = core;
    do {
      result = result / multiplier;
      idx--;
    } while (idx > 0);

    return Number(result.toFixed(2));
  };

  function PX() {
    for (let _idx = 0; _idx < sizesList.length; _idx++) {
      sizesTree[sizesList[_idx]] =
        _idx === 0
          ? minSizeValue() + THEME_SIZES.PX
          : Round(
              RemoveExtension(sizesTree[sizesList[_idx - 1]]) * multiplier
            ) + THEME_SIZES.PX;
    }

    return sizesTree;
  }

  function REM() {
    for (let _idx = 0; _idx < sizesList.length; _idx++) {
      sizesTree[sizesList[_idx]] =
        _idx === 0
          ? Round(minSizeValue() / core, 3) + THEME_SIZES.REM
          : Round(
              RemoveExtension(sizesTree[sizesList[_idx - 1]]) * multiplier,
              4
            ) + THEME_SIZES.REM;
    }

    return sizesTree;
  }

  function EM() {
    for (let _idx = 0; _idx < sizesList.length; _idx++) {
      sizesTree[sizesList[_idx]] =
        _idx === 0
          ? Round(minSizeValue() / core, 3) + THEME_SIZES.EM
          : Round(
              RemoveExtension(sizesTree[sizesList[_idx - 1]]) * multiplier,
              4
            ) + THEME_SIZES.EM;
    }

    return sizesTree;
  }

  return {
    PX,
    REM,
    EM
  };
};
