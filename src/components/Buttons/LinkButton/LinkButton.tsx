import "./LinkButton.scss";
import { Link } from "react-router-dom";
import { Icons } from "../../../icons/Icons";

/**
 * LinkButton component - renders a button that is a link to another page
 * @param {string} link - the link to the page
 * @param {string} btnText - the text to display on the button
 * @param {boolean} rightArrow - whether to display a right arrow icon
 * @param {string} className - additional classes to apply to the button
 */

type Props = {
  link: string;
  btnText: string;
  rightArrow?: boolean;
  className?: string;
};

const Linkbutton = ({ link, btnText, rightArrow, className }: Props) => {
  const RightArrowIcon = Icons.RightArrow;

  return (
    <Link className={`${className} btn`} to={link}>
      {btnText}
      {rightArrow && <RightArrowIcon className="btn-icon" fill="white" />}
    </Link>
  );
};

export default Linkbutton;
