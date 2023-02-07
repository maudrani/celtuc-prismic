import { PrismicRichText } from '@prismicio/react';
import { isEmpty } from 'lodash';
import React from 'react';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import VideoPlayer from '../Base/VideoPlayer';
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


