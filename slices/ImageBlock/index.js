import React from 'react'
import Component from '@/components/ImageBlock2';
import { ParseSliceData } from 'utils/adapters/prismic/slice';

/**
 * @typedef {import("@prismicio/client").Content.ImageBlockSlice} ImageBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageBlockSlice>} ImageBlockProps
 * @param { ImageBlockProps }
 */
const ImageBlock = ({ slice }) => <Component data={ParseSliceData(slice)} />;

export default ImageBlock