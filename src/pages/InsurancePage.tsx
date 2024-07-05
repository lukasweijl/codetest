import Hero from "../components/Hero/Hero";
import InsuranceCard from "../components/InsuranceCard/InsuranceCard";
import { InsurancePresentation } from "../components/InsurancePresentation/InsurancePresentation";
import insuranceData from "../data/insuranceData";
import { useParams } from "react-router-dom";

/**
 * * Insurance Page - displays the main content of the insurance page.
 * Including hero section and single insurance presentation.
 */

const InsurancePage = () => {
  const link = useParams().insuranceType;
  const insurance = insuranceData.find(
    (insurance) => insurance.link === `/${link}`
  );

  if (!insurance) {
    return <div>Insurance not found</div>;
  }

  return (
    <>
      <Hero
        pageName={insurance.title}
        image={insurance.image}
        pageDescription={insurance.text}
      />
      <div className="container">
        <InsurancePresentation insurance={insurance} />
      </div>
      <div className="container">
        <h2>Många har också dessa försäkringar</h2>
        <div className="three-col-container">
          {insuranceData.slice(5, 8).map((insurance, index) => (
            <InsuranceCard
              key={index}
              title={insurance.title}
              link={insurance.link}
              image={insurance.image}
              text={insurance.text}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default InsurancePage;
