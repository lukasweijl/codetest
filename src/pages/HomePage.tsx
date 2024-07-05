import ContactBtn from "../components/Buttons/ContactBtn/ContactBtn";
import InsuranceCard from "../components/InsuranceCard/InsuranceCard";
import image from "../assets/img/beach.webp";
import Hero from "../components/Hero/Hero";
import LinkButton from "../components/Buttons/LinkButton/LinkButton";
import insuranceData from "../data/insuranceData";
import Stats from "../components/Stats/Stats";
import statisticsData from "../data/statsData";

/**
 * * HomePage component - displays the main content of the homepage
 * Including hero section, contact buttons, statistics, and popular insurances.
 */
export default function HomePage() {
  const buttons = [
    { name: "Ansök om ersättning", href: "/kontakta-oss" },
    { name: "Kontakta oss", href: "/kontakta-oss" },
  ];

  return (
    <>
      <Hero
        pageName="Försäkringar för dig och ditt liv"
        image={image}
        pageDescription="Med rätt försäkring blir livet lite enklare och tryggare. Vi finns
          vid din sida när du behöver hjälp och goda råd. Visste du förresten
          att vi är Sveriges nyaste försäkringsbolag?"
        buttonList={buttons}
      />

      <div className="two-col-container">
        <ContactBtn
          link="/kontakta-oss"
          btnText="Ansök om ersättning"
          icon="Notebook"
        />
        <ContactBtn link="/kontakta-oss" btnText="Kontakta oss" icon="Person" />
      </div>

      <Stats
        title="Betrodd av 1 000 000 Skandinavier ✅"
        subtitle="Gör som många andra och välj oss!"
        statsList={statisticsData}
      />

      <div className="container">
        <h2>Våra mest populära försäkringar</h2>
        <div className="three-col-container">
          {insuranceData.slice(0, 3).map((insurance, index) => (
            <InsuranceCard
              key={index}
              title={insurance.title}
              link={insurance.link}
              image={insurance.image}
              text={insurance.text}
            />
          ))}
        </div>
        <div className="center">
          <LinkButton
            className="fit-content"
            btnText="Visa alla försäkringar"
            link="/forsakringar"
            rightArrow
          />
        </div>
      </div>
    </>
  );
}
