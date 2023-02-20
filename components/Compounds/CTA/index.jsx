import Button from '../../Base/Button';
import Link from '../../Base/Link';

const CTA = ({ cta, theme, data, chevron = 'true' }) => {
  
  return cta.type === 'button' ? (
    <Button
      data={{
        size: { main: '1em' },
        background_color: theme.background.accent,
        font_color: theme.font.button,
        ...data,
      }}
    >
      {cta.text}
    </Button>
  ) : (
    <Link
      chevron={chevron}
      href={cta.href}
      data={{
        size: { main: '1em' },
        font_color: theme.font.accent,
        ...data,
      }}
    >
      {cta.text}
    </Link>
  );
};

export default CTA;
