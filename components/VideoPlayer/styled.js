import styled from 'styled-components';

export const VideoPlayerContainer = styled.div`
  display: block;
  position: relative;

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

  .calloutContent {
    text-align: center;

    @include breakpoint(tablet-p) {
      position: absolute;
      top: -60px;
      left: 50%;
      transform: translateX(-50%);
    }

    @include breakpoint(tablet-l) {
      padding: rem-calc(60) rem-calc(30);
      max-width: rem-calc(480);
    }

    h2 {
      @include breakpoint(tablet-l) {
        margin-bottom: rem-calc(35);
      }

      &::before {
        height: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        top: -60px;
        background-color: $brown-light;
        content: '';
        display: block;
        position: absolute;
      }
    }
  }

  .videoSection {
    position: relative;
  }

  .videoWrapper {
    position: relative;
    overflow: hidden;
    @include breakpoint(laptop) {
      max-height: 580px;
    }
    @include breakpoint(tablet-l only) {
      max-height: 444px;
    }
    @include breakpoint(tablet-p only) {
      max-height: 300px;
    }

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
  z-index: 100;

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

    fill: ${({ theme }) => theme.colors.main};
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
  gap: rem-calc(18);

  cursor: pointer;

  @include breakpoint(tablet-p down) {
    padding: 0 12px;
  }

  @include breakpoint(tablet-l down) {
    align-items: center;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    padding-top: rem-calc(18);
    cursor: pointer;

    text-align: center;
    @include font(12, 12, 700);
    font-family: $helvetica;
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
