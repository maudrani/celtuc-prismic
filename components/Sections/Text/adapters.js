import { GetRichTextContent, GetThemeByName } from 'utils/adapters';
import { GetAnimationName } from 'utils/adapters/prismic/names';

const default_values = {
  gap: 3,
};

const getGapValues = (mainGap) => {
  const main = Number(mainGap);

  return {
    main,
    lg: main * 0.75,
    sm: main * 0.5,
  };
};

export const getRepeatedContents = (contentsList = []) =>
  contentsList.map((item) => ({
    text: GetRichTextContent(item.content),
    animation: GetAnimationName(item.animation),
  }));

export const getDataProps = (props) => ({
  theme: GetThemeByName(props.data?.themeName),
  size: props.data?.size || '', //CHANGE TO DEFAULT VALUES
  direction: props.data?.direction,
  backgroundColor: props.data?.background_color,
  fontColor: props.data?.font_color,
  max_width: props.data?.max_width,
  spacing: props.data?.spacing,
  spacing_t: props.data?.spacing_t,
  spacing_b: props.data?.spacing_b,
  padding: props.data?.padding,
  padding_t: props.data?.padding_t,
  padding_b: props.data?.padding_b,
  round: props.data?.round,

  items: props.items || [],
  text_direction: props.data?.text_direction || props.data?.direction,
  text_size: props.data?.text_size,
  gap: getGapValues(props.data?.gap || default_values.gap),
});
