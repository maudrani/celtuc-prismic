import React from 'react';
import Component from '@/components/ImageWithText';

/**
 * @typedef {import("@prismicio/client").Content.ImageWithTextSlice} ImageWithTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageWithTextSlice>} ImageWithTextProps
 * @param { ImageWithTextProps }
 */
const ImageWithText = ({ slice }) => <Component data={slice?.primary} />;

export default ImageWithText;
