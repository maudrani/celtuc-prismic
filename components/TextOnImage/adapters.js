import { GetThemeByName } from 'utils/adapters';

const GetPosition = (value) =>
  ({
    top: 'column',
    bottom: 'column-reverse',
    left: 'row',
    right: 'row-reverse',
  }[value || 'top']);

export const getDataProps = (props, preset) => ({
  theme: GetThemeByName(props.data?.themeName || preset.general.theme),
  backgroundColor: props.data?.background_color,
  img_animation: props.data?.img_animation,
  max_width: props.data?.max_width,
  spacing: props.data?.spacing,
  spacing_t: props.data?.spacing_t,
  spacing_b: props.data?.spacing_b,
  padding: props.data?.padding,
  padding_t: props.data?.padding_t,
  padding_b: props.data?.padding_b,

  img: props.img,
  hasImg: !!props.img?.src,
  content: props.content,
  hasContent: Object.keys(props.content).length > 0,
  ctas: props.ctas,
  hasCtas: !!props.ctas?.length,

  get tag() {
    return this.content?.tag;
  },
  get subtitle() {
    return this.content?.subtitle;
  },
  get title() {
    return this.content?.title;
  },
  get description() {
    return this.content?.description;
  },

  direction: GetPosition(props.data?.position),
});
