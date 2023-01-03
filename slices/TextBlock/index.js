import React from 'react';
import Component from '@/components/TextBlock';
import { ParseSliceData } from 'utils/adapters/prismic/slice';

const TextBlock = ({ slice }) => <Component data={ParseSliceData(slice)} />;

export default TextBlock;
