import React from 'react';
import Component from '@/components/ImageBlock3';
import { ParseSliceData } from 'utils/adapters/prismic/slice';

const ImagesWithText = ({ slice }) => (
  <Component data={ParseSliceData(slice)} />
);

export default ImagesWithText;
