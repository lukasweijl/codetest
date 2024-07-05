import { Insurance } from "../../types";
import Linkbutton from "../Buttons/LinkButton/LinkButton";
import "./InsurancePresentation.scss";

/**
 * * InsurancePresentation - Displays the insurance details for a specific insurance
 * @param {Insurance} insurance - The insurance object
 * @returns {React.FunctionComponent}
 */

type Props = {
  insurance: Insurance;
};

export const InsurancePresentation = ({ insurance }: Props) => {
  return (
    <div className="insurance__detail">
      <div className="insurance__content">
        <div className="insurance__flex">
          <h2 className="title">{insurance.title}</h2>
          <p>{insurance.description}</p>
          <Linkbutton
            className="insurance__btn"
            link="/kontakta-oss"
            btnText="Kontakta oss för offert"
            rightArrow
          />
        </div>
        <dl className="insurance_dl">
          {insurance.bulletPoints.map((point, index) => (
            <div key={index} className="insurance_dl__item">
              <dt className="insurance_dl__title">{point.title}</dt>
              <dd className="insurance_dl__text">{point.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
