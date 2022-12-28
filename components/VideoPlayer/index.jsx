import useTheme from 'hooks/useTheme';
import { useEffect, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import YouTube from 'react-youtube';
import { getYoutubeId } from './adapters';
import React from 'react';

import styles from './VideoPlayer.module.scss';

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
    <section
      className={`${styles.VideoPreview} ${
        showControls && styles.showControls
      } ${className}`}
      data-component="VideoPreview"
      id={id ? id : ''}
    >
      {videoEmbedUrl && (
        <div className={`${styles.videoSection}`}>
          <div
            className={`${styles.videoWrapper} ${
              videoStarted ? styles.showingVideo : styles.notShowingVideo
            } ${videoClassname}`}
          >
            {!videoStarted && (
              <img className={styles.videoPoster} src={thumb || videoThumb} />
            )}

            <div className={`${styles.calloutVideoContainer}`}>
              <YouTube
                videoId={videoId}
                opts={youtubeOptions}
                onReady={videoEvents._onReady}
                onEnd={videoEvents._onEnd}
                onPause={videoEvents.handleVideoPauseClick}
                onPlay={videoEvents.handleVideoPlayClick}
                className={!showControls ? styles.avoidYoutubeClick : ''}
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
        <img className={styles.videoPoster} src={thumb || videoThumb} />
      )}

      {transcript && !hideTranscript && (
        <TranscriptPanel transcript={transcript} />
      )}
    </section>
  );
}

export function PauseButton({ onClick }) {
  const theme = useTheme();

  return (
    <img
      className={styles.pauseButton}
      src={`/static/img/${theme === 'trojan' ? 'trojan' : 'cd'}-icon-pause.svg`}
      onClick={onClick}
    />
  );
}

export function PlayButton({ onClick }) {
  const theme = useTheme();

  return (
    <img
      className={styles.pausePlay}
      src={`/static/img/${theme === 'trojan' ? 'trojan' : 'cd'}-icon-play.svg`}
      onClick={onClick}
    />
  );
}

export function VideoPlayerButton({
  isVideoPlaying,
  onPause,
  onPlay,
  className,
}) {
  return (
    <div
      className={`${styles.PlayerButton} ${
        isVideoPlaying ? styles.hideButton : ''
      } ${className}`}
    >
      {isVideoPlaying
        ? onPause && <PauseButton onClick={onPause} />
        : onPlay && <PlayButton onClick={onPlay} />}
    </div>
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
  const theme = useTheme();

  const onViewTranscriptClick = () => {
    onClick && onClick({ toggled: !toggleTranscript });
    setToggleTranscript(!toggleTranscript);
  };

  useEffect(() => {
    setToggleTranscript(showTranscript);
  }, [showTranscript]);

  return (
    <div
      className={`${styles.transcriptWrapper} ${
        (transcript === '' || !transcript) && styles.disabled
      } ${styles[theme]} ${className}`}
    >
      <span
        onClick={onViewTranscriptClick}
        className={`${
          toggleTranscript ? styles.transcriptOpen : ''
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
    </div>
  );
}
