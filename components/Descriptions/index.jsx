import { PrismicRichText } from '@prismicio/react';
import Button from 'components/Button';
import Img from 'components/Img';
import { AboutWrapper } from './styled';

function Descriptions({ data }) {
  const { title, description, image1, image2, button } = data;

  return (
    <AboutWrapper>
      <div className="content uContainContent">
        <div className="panel">
          <h2>{title}</h2>
          <Img src={image1.url} objectFit="cover" />
        </div>

        <div className="panel">
          <div className="paragraph">
            <PrismicRichText field={description} />
          </div>
          <Img src={image2.url} objectFit="cover" />
        </div>
      </div>
      <Button>{button}</Button>
    </AboutWrapper>
  );
}

export default Descriptions;

Descriptions.exampleProps = {
  data: {
    title: 'Excepteur nulla pariatur qui consequat consectetur.',
    description: [
      {
        type: 'paragraph',
        text: `Velit occaecat anim sit mollit consequat minim exercitation deserunt quis. Amet laborum nisi amet nostrud veniam commodo. Nostrud labore reprehenderit anim eiusmod sit mollit veniam. Cupidatat excepteur aute sunt amet Lorem adipisicing aliqua tempor aliquip adipisicing.

Officia fugiat labore ea Lorem occaecat. Magna sit Lorem mollit proident ullamco commodo. Tempor voluptate sit amet sint incididunt tempor minim sint ea. Id dolor et ullamco enim esse aute et sint cupidatat cupidatat. Officia deserunt mollit incididunt adipisicing fugiat veniam duis amet occaecat.`,
        spans: [],
      },
    ],
    image1: {
      dimensions: {
        width: 864,
        height: 1296,
      },
      alt: null,
      copyright: null,
      url: 'https://images.prismic.io/natural-anglers/33dc599e-6eb3-4738-90ed-bc89e0a2eac7_Photo+from+2020-03-09+20-47-31.webp?auto=compress,format',
    },
    image2: {
      dimensions: {
        width: 1328,
        height: 886,
      },
      alt: null,
      copyright: null,
      url: 'https://images.prismic.io/natural-anglers/2b0f5892-482e-4869-84ba-1f1c02a74612_090A0451.webp?auto=compress,format',
    },
    button: 'Button text',
  },
};
