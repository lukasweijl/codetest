import React from "react";
import { Icons } from "../../icons/Icons";
import "./ContactInfo.scss";

/**
 * * ContactInfo - Displays the contact information of the company
 * @returns {React.FunctionComponent}
 */

export const ContactInfo = () => {
  return (
    <dl className="contact__info">
      <div className="contact__flex">
        <dt>
          <Icons.Office className="contact__icon" />
        </dt>
        <dd>
          Försäkra AB
          <br />
          Storgatan 1, 123 45 Stockholm
        </dd>
      </div>
      <div className="contact__flex">
        <dt>
          <Icons.Phone className="contact__icon" />
        </dt>
        <dd>
          <a href="tel:+467012345678">+46 70 123 45 67</a>
        </dd>
      </div>
      <div className="contact__flex">
        <dt>
          <Icons.Mail className="contact__icon" />
        </dt>
        <dd>
          <a href="mailto:hello@forsakra.se">hello@forsakra.se</a>
        </dd>
      </div>
    </dl>
  );
};
