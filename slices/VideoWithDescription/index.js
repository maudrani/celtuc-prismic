import React from 'react';
import Component from 'components/VideoWithDescription';

/**
 * @typedef {import("@prismicio/client").Content.VideoWithDescriptionSlice} VideoWithDescriptionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VideoWithDescriptionSlice>} VideoWithDescriptionProps
 * @param { VideoWithDescriptionProps }
 */
const VideoWithDescription = ({ slice }) => <Component data={slice.primary} />;

export default VideoWithDescription;
