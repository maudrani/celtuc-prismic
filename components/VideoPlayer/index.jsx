import { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import YouTube from 'react-youtube';
import { getYoutubeId } from './adapters';
import {
  PlayerButton,
  TranscriptContainer,
  VideoPlayerContainer,
} from './styled';
import { BsPlay } from 'react-icons/bs';
import { AiOutlinePause } from 'react-icons/ai';

export default function VideoPlayer({
  videoEmbedUrl,
  transcript,
  showControls,
  thumb,
  autoplay,
  className,
  getVideoData,
  showPlayerButton = true,
  buttonClassName,
  videoClassname,
  id,
  onReady,
  playVideo,
  hideTranscript,
}) {
  const [video, setVideo] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(!!playVideo);
  const [videoStarted, setVideoStarted] = useState(false);

  const isFunction = (el) => typeof el === 'function';
  useEffect(() => {
    setVideoStarted(false);
    setVideoPlaying(false);
    setVideo(null);
  }, [videoEmbedUrl]);

  const videoId = videoEmbedUrl ? getYoutubeId(videoEmbedUrl) : '';
  const videoThumb = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  const videoEvents = {
    _onReady: (event) => {
      event.target.mute();
      event.target.pauseVideo();
      if (getVideoData) getVideoData(event.target);
      if (isFunction(onReady)) onReady(event.target);
      setVideo(event.target);
    },
    _onEnd: (event) => {
      event.target.playVideo();
    },
    handleVideoPauseClick: () => {
      video.pauseVideo();
      setVideoPlaying(false);
    },
    handleVideoPlayClick: () => {
      video.playVideo();
      setVideoPlaying(true);
      setVideoStarted(true);
    },
  };

  useEffect(() => {
    setVideoStarted(false);
    setVideoPlaying(false);
    setVideo(null);
  }, [videoEmbedUrl]);

  useEffect(() => {
    if (!video) return;
    playVideo
      ? videoEvents.handleVideoPlayClick()
      : videoEvents.handleVideoPauseClick();
  }, [playVideo]);

  const youtubeOptions = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: autoplay ? 1 : 0,
      controls: showControls ? 1 : 0,
      enablejsapi: 1,
      fs: 0,
      loop: 1,
      modestbranding: 0,
      rel: 0,
      origin: 'http://localhost:3000', //for local testing
    },
  };

  return (
    <VideoPlayerContainer
      className={`${showControls && `showControls`} ${className}`}
      data-component="VideoPreview"
      id={id ? id : ''}
    >
      {videoEmbedUrl && (
        <div className={`videoSection`}>
          <div
            className={`${'videoWrapper'} ${
              videoStarted ? 'showingVideo' : 'notShowingVideo'
            } ${videoClassname}`}
          >
            {!videoStarted && (
              <img className={'videoPoster'} src={thumb || videoThumb} />
            )}

            <div className={`${'calloutVideoContainer'}`}>
              <YouTube
                videoId={videoId}
                opts={youtubeOptions}
                onReady={videoEvents._onReady}
                onEnd={videoEvents._onEnd}
                onPause={videoEvents.handleVideoPauseClick}
                onPlay={videoEvents.handleVideoPlayClick}
                className={!showControls ? 'avoidYoutubeClick' : ''}
              />
            </div>
          </div>

          {video && showPlayerButton && (
            <VideoPlayerButton
              onPause={videoEvents.handleVideoPauseClick}
              onPlay={videoEvents.handleVideoPlayClick}
              isVideoPlaying={videoPlaying}
              className={buttonClassName}
            />
          )}
        </div>
      )}

      {!videoEmbedUrl && (
        <img className={'videoPoster'} src={thumb || videoThumb} />
      )}

      {transcript && !hideTranscript && (
        <TranscriptPanel transcript={transcript} />
      )}
    </VideoPlayerContainer>
  );
}

export function VideoPlayerButton({
  isVideoPlaying,
  onPause,
  onPlay,
  className,
}) {
  return (
    <PlayerButton
      className={`PlayerButton ${
        isVideoPlaying ? 'hideButton' : ''
      } ${className}`}
    >
      {isVideoPlaying
        ? onPause && <AiOutlinePause onClick={onPause} />
        : onPlay && <BsPlay onClick={onPlay} className="playButton" />}
    </PlayerButton>
  );
}

export function TranscriptPanel({
  transcript,
  className,
  onClick,
  hidePanel,
  showTranscript,
}) {
  const [toggleTranscript, setToggleTranscript] = useState(showTranscript);

  const onViewTranscriptClick = () => {
    onClick && onClick({ toggled: !toggleTranscript });
    setToggleTranscript(!toggleTranscript);
  };

  useEffect(() => {
    setToggleTranscript(showTranscript);
  }, [showTranscript]);

  return (
    <TranscriptContainer
      className={`${
        (transcript === '' || !transcript) && 'disabled'
      }  ${className}`}
    >
      <span
        onClick={onViewTranscriptClick}
        className={`${
          toggleTranscript ? 'transcriptOpen' : ''
        } transcriptButton `}
      >
        {toggleTranscript ? 'Hide' : 'Show'} transcript
      </span>
      {toggleTranscript && !hidePanel && (
        <ReactMarkdown
          linkTarget={(href) => (href.match(/^https?:/) ? '_blank' : '_self')}
        >
          {transcript}
        </ReactMarkdown>
      )}
    </TranscriptContainer>
  );
}
