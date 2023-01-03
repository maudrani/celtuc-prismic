import { isEmpty } from 'lodash';
import Image from 'next/image';
import React from 'react';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import getShimmerPath from 'utils/images/blur';
import RichText from '../Base/RichText';
import { imgUrlByBreakpoint, parseProps } from './adapters';
import { ImageWithTextContainer, TextContainer } from './styled';

const ImageWithText = ({ data = {} }) => {
  const {
    size,
    top_text,
    title,
    description,
    image,
    bottom_text,
    showImage,
    showText,
    theme,
    orientation,
  } = parseProps(data);

  const isTablet = useBreakpoint(768);

  if (isEmpty(data)) return null;

  return (
    <ImageWithTextContainer
      size={size}
      themeName={theme}
      orientation={orientation}
    >
      {showImage && (
        <div className="image-container">
          <Image
            src={imgUrlByBreakpoint(image, 'tablet', isTablet)}
            alt="Image Alt"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={getShimmerPath(
              image?.dimensions?.width,
              image?.dimensions?.height
            )}
          />
        </div>
      )}

      {showText && (
        <TextContainer className="text-container" themeName={theme}>
          {top_text && <span className="top-text">{top_text}</span>}
          <div className="main-texts">
            {title && <h4>{title}</h4>}
            {description && <RichText data={{ markdown: description }} />}
          </div>
          {bottom_text && <span className="bottom-text">{bottom_text}</span>}
        </TextContainer>
      )}
    </ImageWithTextContainer>
  );
};

export default ImageWithText;

ImageWithText.exampleProps = {
  data: {
    top_text: 'Top text',
    title: 'Title long Title',
    description: [
      {
        type: 'paragraph',
        text: `Anim ullamco laboris velit cillum. Excepteur cillum laborum nostrud
        mollit id ad proident tempor dolor ullamco reprehenderit elit. Anim
        labore Lorem mollit eu ad aliqua ad enim elit et. Consequat ad culpa
        sit consequat duis aute reprehenderit Lorem occaecat laborum.`,
        spans: [],
      },
    ],
    image: {
      dimensions: {
        width: 864,
        height: 1296,
      },
      alt: null,
      copyright: null,
      url: 'https://images.prismic.io/natural-anglers/33dc599e-6eb3-4738-90ed-bc89e0a2eac7_Photo+from+2020-03-09+20-47-31.webp?auto=compress,format',
      tablet: {
        dimensions: {
          width: 768,
          height: 768,
        },
        alt: null,
        copyright: null,
        url: 'https://images.prismic.io/natural-anglers/33dc599e-6eb3-4738-90ed-bc89e0a2eac7_Photo+from+2020-03-09+20-47-31.webp?auto=compress,format&rect=0,216,864,864&w=768&h=768',
      },
    },
    bottom_text: 'Bottom text',
    size: 50,
    theme: 'dark',
  },
};
