import ImageWithText from '@/components/ImageWithText';
import VideoPlayer from '@/components/Base/VideoPlayer';
import React from 'react';
import VideoWithDescription from '@/components/VideoWithDescription';
import RichText from '@/components/Base/RichText';
import VideoWithText from '@/components/VideoWithText';
import Img from '@/components/Base/Img';

const Test = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '400px',
      }}
    >
      {/* VIDEO PLAYER */}
      <div style={{ width: '100%', maxWidth: '700px', height: '100%' }}>
        <VideoPlayer
          videoEmbedUrl={
            'https://www.youtube.com/watch?v=GgQInYQ0rg0&ab_channel=NoticiasdelFutbol'
          }
        />
      </div>

      {/* IMAGE WITH TEXT */}
      <ImageWithText {...ImageWithText.exampleProps} />

      {/* Video with description */}
      {/* <VideoWithDescription {...VideoWithDescription.exampleProps} /> */}

      {/* Video with text */}
      <VideoWithText {...VideoWithText.exampleProps} />

      {/* RICH TEXT */}
      <RichText {...RichText.exampleProps} />

      {/* IMAGE */}
      <div
        style={{
          width: '100%',
          height: '750px',
        }}
      >
        <Img src={'/img/photos/test-image.webp'} />
      </div>
      <div
        style={{
          width: '100%',
          height: '750px',
        }}
      >
        <Img src={'/img/photos/test-image.jpg'} />
      </div>
    </div>
  );
};

export default Test;
