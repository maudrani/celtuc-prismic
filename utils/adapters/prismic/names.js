export const GetAnimationName = (value) =>
  ({
    'Fade In': 'fade_in',
    Typed: 'typed_text',
    None: 'none',
  }[value || 'None']);