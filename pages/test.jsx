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
      }}
    >
      <ImageWithText {...ImageWithText.exampleProps} />

      <VideoWithText {...VideoWithText.exampleProps} />

      <div
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Img
          src={
            'https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
          }
        />
      </div>
    </div>
  );
};

export default Test;