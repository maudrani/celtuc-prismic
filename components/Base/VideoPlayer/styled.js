import { query } from '@/styles/theme/data/breakpoints';
import styled from 'styled-components';

export const VideoPlayerContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;

  /* Disable pointer events for YT */
  .avoidYoutubeClick {
    pointer-events: none !important;
  }

  .calloutContentWrapper {
    display: block;
    height: 100%;
    width: 100%;
    position: relative;
  }

  .videoSection {
    position: relative;
  }

  .videoWrapper {
    position: relative;
    overflow: hidden;

    .videoPoster {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
    }

    &.notShowingVideo {
      .videoPoster {
        display: block;
      }
    }

    &.showingVideo {
      .videoPoster {
        display: none;
      }
    }
  }

  .calloutVideoContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 56.25%;
    padding-top: 25px;
    width: 300%;
    left: -100%;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  &.showControls {
    .calloutVideoContainer {
      width: 100%;
      left: 0;
    }
  }

  &:hover {
    .PlayerButton {
      opacity: 1 !important;
    }
  }
`;

export const PlayerButton = styled.div`
  background-color: rgba(255, 255, 255, 0.85);

  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 50%;
  z-index: 10;

  max-width: 125px;
  max-height: 125px;
  width: 13%;
  aspect-ratio: 1/1;
  min-width: 50px;
  padding: 1%;

  border-radius: 50%;
  transform: translateX(-50%) translateY(-48%);

  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.7));
  }

  &.hideButton {
    opacity: 0;
  }

  svg {
    width: 100%;
    height: 100%;

    fill: ${({ theme }) => theme.colors.shark};
    opacity: 0.8;

    &.playButton {
      transform: translateX(6%);
    }
  }
`;

export const TranscriptContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 18px;

  cursor: pointer;

  ${query.down('md')} {
    padding: 0 12px;
  }

  ${query.down(1024)} {
    align-items: center;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    padding-top: 18px;
    cursor: pointer;

    text-align: center;
    @include font(12, 12, 700);
    text-transform: uppercase;

    &::after {
      content: '+';
      @include font(20, 18, 100);
    }

    &.transcriptOpen {
      &::after {
        content: '-';
      }
    }

    &:hover {
      opacity: 0.8;
    }
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.45;
  }
`;
