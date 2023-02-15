import { GetThemeByName } from 'utils/adapters';

export const getDataProps = (props) => ({
  theme: GetThemeByName(props.data?.themeName),
  direction: props.data?.direction,
  title_animation: props.data?.title_animation,
  img_animation: props.data?.img_animation,
  max_width: props.data?.max_width,
  spacing: props.data?.spacing,
  spacing_t: props.data?.spacing_t,
  spacing_b: props.data?.spacing_b,

  img: props.img,
  hasImg: !!props.img?.src,

  content: props.content,
  hasContent: props.content && !!Object.keys(props.content)?.length,
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
