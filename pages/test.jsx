import ImageWithText from '@/components/ImageWithText';
import VideoPlayer from '@/components/Base/VideoPlayer';
import React from 'react';
import VideoWithDescription from '@/components/VideoWithDescription';
import RichText from '@/components/Base/RichText';
import VideoWithText from '@/components/VideoWithText';
import Img from '@/components/Base/Img';
import styled from 'styled-components';
import FadeInSection from '@/components/Base/Animation/components/FadeIn';

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

      <FadeInSection>
        <div
          style={{
            width: '500px',
            height: '500px',
          }}
        >
          <Img
            src={
              'https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
            }
          />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div
          style={{
            width: '500px',
            height: '500px',
          }}
        >
          <Img
            src={
              'https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
            }
          />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div
          style={{
            width: '500px',
            height: '500px',
          }}
        >
          <Img
            src={
              'https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
            }
          />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div
          style={{
            width: '500px',
            height: '500px',
          }}
        >
          <Img
            src={
              'https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
            }
          />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div
          style={{
            width: '500px',
            height: '500px',
          }}
        >
          <Img
            src={
              'https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
            }
          />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div
          style={{
            width: '500px',
            height: '500px',
          }}
        >
          <Img
            src={
              'https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'
            }
          />
        </div>
      </FadeInSection>
    </div>
  );
};

export default Test;
