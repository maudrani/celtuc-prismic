import { PrismicRichText } from "@prismicio/react";
import { CalloutWrapper } from "./styles";

export default function CalloutImage({ data }) {
  const { image, title, description, button } = data;

  const hasDescription = Array.isArray(description) && description[0]?.text

  return (
    <CalloutWrapper
      className="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center"
      image={image.url}
    >
      <div className="lg:mx-8 lg:flex lg:max-w-5xl wrapper">
        <div className="lg:w-1/2">
          <div className="h-64 bg-cover lg:h-full image-container"></div>
        </div>

        <div className="max-w-xl px-16 py-12 lg:max-w-5xl lg:w-1/2">
          {title && (
            <div className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl title">
              <PrismicRichText field={title} />
            </div>
          )}

          {hasDescription && (
            <div className="mt-4 text-gray-600 dark:text-gray-400">
              <PrismicRichText field={description} />
            </div>
          )}

          {button && (
            <div className="mt-8">
              <a
                href="#"
                className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
              >
                {button}
              </a>
            </div>
          )}
        </div>
      </div>
    </CalloutWrapper>
  );
}
