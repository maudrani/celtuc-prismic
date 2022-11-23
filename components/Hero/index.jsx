import React, { useEffect } from "react";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { HeroWrapper } from "./styled";
import { GetYoutubeId } from "helpers/youtube";
import { DateDMY } from "helpers/date";

const Hero = ({ data }) => {
  const { image, video_link, title, description, size } = data;

  const videoURl = () => {
    const id = GetYoutubeId(video_link);

    return `https://www.youtube.com/embed/${id}?autoplay=1&loop=1&mute=1&playlist=${id}`;
  };

  useEffect(() => {
    if (!document) return;

    const shadePanel = document.querySelector(".shade-effect");

    document.addEventListener("scroll", () => {
      const scrollAdvance = Math.round(window.pageYOffset / 10) / 60;
      shadePanel.style.opacity = scrollAdvance;
    });
  }, []);

  return (
    <HeroWrapper backgroundImage={image?.url} size={size}>
      <figure className="hero-wrapper" >
        <div className="shade-effect" />
        <div className="video-hero-wrapper">
          <div className="overflow-wrapper">
            {video_link && !image?.url && (
              <iframe
                src={videoURl()}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <figcaption className="hero-caption">
            {title ? (
              <h2>{title}</h2>
            ) : (
              <img
                alt="logo"
                src="/img/logo/logo-negative.svg"
                className="hero-logo"
              />
            )}
            {description[0]?.text ? <PrismicRichText field={description} /> : <p className="hero-disclaimer">{/* Natural Anglers {DateDMY()} */}</p>}
            
          </figcaption>
        </div>
      </figure>
    </HeroWrapper>
  );
};

export default Hero;
