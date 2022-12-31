import { PrismicRichText } from '@prismicio/react';
import { isEmpty } from 'lodash';
import React from 'react';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import VideoPlayer from '../VideoPlayer';
import { imgUrlByBreakpoint, parseProps } from './adapters';
import { VideoWithTextContainer } from './styled';

const VideoWithText = ({ data = {} }) => {
  const {
    videoData,
    title,
    description,
    showVideo,
    showText,
    theme,
    size,
    direction,
  } = parseProps(data);

  const isTablet = useBreakpoint(768);

  if (isEmpty(data)) return null;

  return (
    <VideoWithTextContainer size={size} themeName={theme} direction={direction}>
      {showVideo && (
        <div className="video-container">
          <VideoPlayer
            videoEmbedUrl={videoData.url}
            showControls={videoData.showControls}
            transcript={videoData.transcript}
            transcriptClassname="video-transcript"
            thumb={imgUrlByBreakpoint(videoData?.thumb, 'mobile', isTablet)}
          />
        </div>
      )}

      {showText && (
        <div className="text-container">
          {title && <h4>{title}</h4>}
          {description && <PrismicRichText field={description} />}
        </div>
      )}
    </VideoWithTextContainer>
  );
};

export default VideoWithText;

VideoWithText.exampleProps = {
  data: {
    title: 'This is Natural Anglers',
    description: [
      {
        type: 'paragraph',
        text: 'Nostrud ex do sunt sint sunt eiusmod aliqua nostrud eu laboris exercitation est laborum. Ipsum anim veniam enim dolore nisi officia velit consequat. Laborum quis elit labore minim. Eiusmod pariatur elit nostrud in aute. In sit in dolor commodo nostrud. Consectetur incididunt amet occaecat elit labore veniam duis aliqua pariatur irure. Qui consequat duis enim nulla velit consequat occaecat est anim nostrud.',
        spans: [],
      },
    ],
    video_url: {
      height: 113,
      width: 200,
      embed_url:
        'https://www.youtube.com/watch?v=WlDpC67hvVY&t=29s&ab_channel=TomasLeon',
      type: 'video',
      version: '1.0',
      title: 'Natural Anglers Fly Fishing Patagonia',
      author_name: 'Tomas Leon',
      author_url: 'https://www.youtube.com/@tomasleon1076',
      provider_name: 'YouTube',
      provider_url: 'https://www.youtube.com/',
      cache_age: null,
      thumbnail_url: 'https://i.ytimg.com/vi/WlDpC67hvVY/hqdefault.jpg',
      thumbnail_width: 480,
      thumbnail_height: 360,
      html: '<iframe width="200" height="113" src="https://www.youtube.com/embed/WlDpC67hvVY?start=29&feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Natural Anglers Fly Fishing Patagonia"></iframe>',
    },
    video_transcript: [
      {
        type: 'paragraph',
        text: 'Laboris elit dolore occaecat ex consectetur pariatur id amet eu nisi excepteur adipisicing. Proident cillum quis ex velit duis irure excepteur nostrud magna est adipisicing Lorem qui ex. Tempor veniam nisi culpa enim aliqua deserunt proident nostrud incididunt laboris. Laborum sit sunt quis commodo tempor. Dolor consequat enim ullamco eiusmod id id consectetur ea. Veniam tempor consectetur dolor aliqua fugiat esse ea.',
        spans: [],
      },
    ],
    show_video_controls: true,
    video_preview_image: {
      dimensions: {
        width: 1328,
        height: 886,
      },
      alt: null,
      copyright: null,
      url: 'https://images.prismic.io/natural-anglers/2b0f5892-482e-4869-84ba-1f1c02a74612_090A0451.webp?auto=compress,format',
      tablet: {
        dimensions: {
          width: 800,
          height: 550,
        },
        alt: null,
        copyright: null,
        url: 'https://images.prismic.io/natural-anglers/2b0f5892-482e-4869-84ba-1f1c02a74612_090A0451.webp?auto=compress,format&rect=19,0,1289,886&w=800&h=550',
      },
      mobile: {
        dimensions: {
          width: 450,
          height: 300,
        },
        alt: null,
        copyright: null,
        url: 'https://images.prismic.io/natural-anglers/2b0f5892-482e-4869-84ba-1f1c02a74612_090A0451.webp?auto=compress,format&rect=0,0,1328,885&w=450&h=300',
      },
    },
    size: 'xxl',
  },
};
