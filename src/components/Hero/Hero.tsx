import "./Hero.scss";
import Button from "../Buttons/LinkButton/LinkButton";
import { ButtonInfo } from "../../types";

/**
 * * Hero component - used for the hero section of a page.
 * @param {string} pageName - The name of the page
 * @param {string} pageDescription - The description of the page
 * @param {string} image - The image to display
 * @param {ButtonInfo[]} buttonList - The list of buttons to display
 */

type Props = {
  pageName: string;
  pageDescription: string;
  image: string;
  buttonList?: ButtonInfo[];
};

const Hero = ({ buttonList, pageName, pageDescription, image }: Props) => {
  return (
    <section>
      <div className="two-col-container">
        <div className="left">
          <h1 className="lineheight-large">{pageName}</h1>
          <p className="lineheight">{pageDescription}</p>
          <div className="btn__group">
            {buttonList?.map((button, index) => (
              <Button
                key={index}
                link={button.href}
                btnText={button.name}
                rightArrow
              />
            ))}
          </div>
        </div>
        <div className="right">
          <img
            className="hero__image"
            src={image}
            fetchpriority="high"
            alt="Beach img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
