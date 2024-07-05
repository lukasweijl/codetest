import Hero from "../components/Hero/Hero";
import image from "../assets/img/beach.webp";
import InsuranceCard from "../components/InsuranceCard/InsuranceCard";
import insuranceData from "../data/insuranceData";

/**
 * * Insurances Page - displays the main content of the insurances page.
 * Including hero section and all insurance cards.
 */

export default function DetailsPage() {
  const buttonInfo = {
    name: "Ring oss för mer info",
    href: "/kontakta-oss",
  };

  return (
    <div>
      <Hero
        pageName="Hitta rätt försäkring för dig och din familj"
        pageDescription=" Med rätt försäkring blir livet lite enklare och tryggare. Vi finns
            vid din sida när du behöver hjälp och goda råd. Visste du förresten
            att vi är Sveriges nyaste försäkringsbolag?"
        image={image}
        buttonList={[buttonInfo]}
      />
      <div className="container">
        <div className="three-col-container">
          {insuranceData?.map((insurance, index) => (
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
    </div>
  );
}
