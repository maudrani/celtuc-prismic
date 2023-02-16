import { GetThemeByName } from 'utils/adapters';

const GetTextDirection = (value) =>
  ({
    center: 'center',
    left: 'left',
    right: 'end',
  }[value || 'center']);

export const getDataProps = (props) => ({
  theme: GetThemeByName(props.data?.themeName),
  size: props.data?.size || 'lg', //CHANGE TO DEFAULT VALUES
  direction: props.data?.direction,
  text_direction: GetTextDirection(
    props.data?.text_direction || props.data?.direction
  ),
  backgroundColor: props.data?.background_color,
  fontColor: props.data?.font_color,
  max_width: props.data?.max_width,
  spacing: props.data?.spacing,
  spacing_t: props.data?.spacing_t,
  spacing_b: props.data?.spacing_b,
  padding: props.data?.padding,
  padding_t: props.data?.padding_t,
  padding_b: props.data?.padding_b,
  img_animation: props.data?.img_animation,
  round: props.data?.round,
  text_size: props.data?.text_size,

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
});
