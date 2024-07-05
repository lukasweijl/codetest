import "./InsuranceCard.scss";
import { Icons } from "../../icons/Icons";
import { Link } from "react-router-dom";

/**
 * * InsuranceCard - Displays an insurance card
 * @param {string} title - The title of the card
 * @param {string} text - The text of the card
 * @param {string} link - The link to redirect to
 * @param {string} image - The image of the card
 * @returns {React.FunctionComponent}
 */

type InsuranceCardProps = {
  title: string;
  link: string;
  image: string;
  text: string;
};

const InsuranceCard = ({ title, text, link, image }: InsuranceCardProps) => {
  return (
    <Link className="insurance__card" to={`/forsakringar${link}`}>
      <div className="insurance__content">
        <img
          src={image}
          className="insurance__img"
          loading="lazy"
          alt={title}
        />
        <div className="text__container">
          <h3 className="title">{title}</h3>
          <p className="text">{text}</p>
          <span className="read-more">
            Läs mer
            <Icons.RightArrow className="insurance__icon" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default InsuranceCard;
