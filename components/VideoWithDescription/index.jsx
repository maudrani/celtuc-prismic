import { PrismicRichText } from '@prismicio/react';
import { isEmpty } from 'lodash';
import React from 'react';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import VideoPlayer from '../Base/VideoPlayer';
import { imgUrlByBreakpoint, parseProps } from './adapters';
import { TextContainer, VideoWithDescriptionContainer } from './styled';

const VideoWithDescription = ({ data = {} }) => {
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
    <VideoWithDescriptionContainer
      size={size}
      themeName={theme}
      direction={direction}
    >
      <div className="content uContainContent">
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
          <TextContainer className="text-container" themeName={theme} size={size}>
            <div className="main-texts">
              {title && <h4>{title}</h4>}
              {description && <PrismicRichText field={description} />}
            </div>
          </TextContainer>
        )}
      </div>
    </VideoWithDescriptionContainer>
  );
};

export default VideoWithDescription;
