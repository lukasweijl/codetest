import Hero from "../components/Hero/Hero";
import Form from "../components/Form/Form";
import { ContactInfo } from "../components/ContactInfo/ContactInfo";
import { OpeningHours } from "../components/OpeningHours/OpeningHours";
import contact from "../assets/img/contact.webp";

/**
 * * Contact Page - displays the main content of the contact page.
 * Including hero section, contact form and opening hours.
 */

export default function ContactPage() {
  return (
    <>
      <Hero
        image={contact}
        pageName="Välkommen till vår kundservice!"
        pageDescription="Här nedan hittar du information om hur du kan få tag i oss samt våra öppettider"
      />
      <div
        className="two-col-container
      column"
      >
        <div className="left">
          <h2 className="">Kontakta oss!</h2>
          <p>
            Vi finns här för att hjälpa dig. Kontakta oss via telefon, e-post
            eller besök oss på plats.
          </p>

          <ContactInfo />
        </div>

        <div className="right">
          <Form />
        </div>
      </div>
      <OpeningHours />
    </>
  );
}
