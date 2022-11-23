import { PrismicRichText } from "@prismicio/react";
import Button from "components/Button";
import Img from "components/Img";
import { AboutWrapper } from "./styled";

function Descriptions({ data }) {
  const { title, description, image1, image2, button } = data;

  console.log(data)

  return (
    <AboutWrapper>
      <div className="content">
        <div className="panel">
        <PrismicRichText field={title}/>
          <Img
            src={image1.url}
            objectFit="cover"
          />
        </div>

        <div className="panel">
          <div className="paragraph">
          <PrismicRichText field={description}/>
          </div>
          <Img
            src={image2.url}
            objectFit="cover"
          />
        </div>
      </div>
      <Button>{button}</Button>
    </AboutWrapper>
  );
}

export default Descriptions;
