import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import CalloutImage from '@/components/CalloutWithImage'

/**
 * @typedef {import("@prismicio/client").Content.CalloutWithImageSlice} CalloutWithImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CalloutWithImageSlice>} CalloutWithImageProps
 * @param { CalloutWithImageProps }
 */
const CalloutWithImage = ({ slice }) => (
  <CalloutImage data={slice?.primary}/>
)

export default CalloutWithImage