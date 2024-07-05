import React from "react";
import "./ContactBtn.scss";
import { IconType, Icons } from "../../../icons/Icons";
import { Link } from "react-router-dom";

/**
 * * ContactBtn - Bigger button that redirects to a specific page
 * @param {string} link - The link to redirect to
 * @param {string} btnText - The text to display on the button
 * @param {IconType} icon - The icon to display on the button
 *
 * @returns {React.JSX.Element}
 */

type Props = {
  link: string;
  btnText: string;
  icon: IconType;
};

const ContactBtn = ({ link, btnText, icon }: Props) => {
  const IconComponent = Icons[icon];
  const RightArrow = Icons.RightArrow;

  return (
    <Link className="btn__wrapper" to={link}>
      <IconComponent className="icon" />
      <div className="btn__link">{btnText}</div>
      <RightArrow fill="blue" className="arrow" />
    </Link>
  );
};

export default ContactBtn;
