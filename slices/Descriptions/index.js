import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Descriptions from "@/components/Descriptions";

/**
 * @typedef {import("@prismicio/client").Content.DescriptionsSlice} DescriptionsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DescriptionsSlice>} DescriptionsProps
 * @param { DescriptionsProps }
 */
const DescriptionsSlice = ({ slice }) => <Descriptions data={slice.primary} />;

export default DescriptionsSlice;
