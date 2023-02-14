import { GetThemeByName } from "utils/adapters";

const GetPosition = (value) => ({
    top: 'column',
    bottom: 'column-reverse',
    left: 'row',
    right: 'row-reverse'
}[value || 'top'])

export const getDataProps = (props, preset) => ({
    theme:  GetThemeByName(props.data?.themeName || preset.general.theme),
    img: props.img,
    hasImg: !!props.img?.src,
    content: props.content,
    hasContent: Object.keys(props.content).length > 0,
    ctas: props.ctas,
    hasCtas: !!props.ctas?.length,

   get tag() {return this.content?.tag},
   get subtitle() {return this.content?.subtitle},
   get title() {return this.content?.title},
   get description() {return this.content?.description},

   direction: GetPosition(props.data?.position)
})