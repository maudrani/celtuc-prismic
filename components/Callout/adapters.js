import { GetThemeByName } from "utils/adapters";

export const getDataProps = (dataObj, preset) => ({
    theme:  GetThemeByName(dataObj?.themeName || preset.general.theme)
})