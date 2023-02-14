import { GetThemeByName } from "utils/adapters";

export const getDataProps = (props, preset) => ({
    theme:  GetThemeByName(props.data?.themeName || preset.general.theme),
    img: props.img,
    hasImg: !!props.img?.src,
    content: props.content,
    ctas: props.ctas,
    hasCtas: !!props.ctas?.length,

   get tag() {return this.content.tag},
   get subtitle() {return this.content.subtitle},
   get title() {return this.content.title},
   get description() {return this.content.description},

   direction: props.data?.position
})