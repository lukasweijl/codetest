import { Insurance } from "../types";
import home from "../assets/img/insurance/home.webp";
import car from "../assets/img/insurance/car.webp";
import travel from "../assets/img/insurance/travel.webp";
import life from "../assets/img/insurance/life.webp";
import pet from "../assets/img/insurance/dog_cat.webp";
import accident from "../assets/img/insurance/accident.webp";
import sick from "../assets/img/insurance/sick.webp";
import boat from "../assets/img/insurance/boat.webp";
import money from "../assets/img/insurance/money.webp";

/**
 * * Insurance Data - contains all the insurance data.
 * Used to display the insurance cards and single insurance presentation.
 * TODO: Future implementation could include fetching data from an API.
 */

const insuranceData: Insurance[] = [
  {
    title: "Hemförsäkring",
    link: "/hemforsakring",
    image: home,
    text: "Skydda ditt hem och dina ägodelar mot oväntade händelser.",
    description:
      "Hemförsäkring skyddar ditt hem mot olika typer av skador och förluster. Detta inkluderar skydd mot brand, inbrott, vattenskador och andra oförutsedda händelser. Dessutom täcker det även kostnader för tillfälligt boende om ditt hem blir obeboeligt och ansvarsförsäkring om du orsakar skador på andras egendom.",
    bulletPoints: [
      { title: "Skydd mot brand", value: 2000 },
      { title: "Inbrottsskydd", value: 1500 },
      { title: "Ansvarsförsäkring", value: 1000 },
    ],
  },
  {
    title: "Bilförsäkring",
    link: "/bilforsakring",
    image: car,
    text: "Få ett omfattande skydd för din bil, inklusive stöld och skador.",
    description:
      "Bilförsäkring ger dig ekonomiskt skydd vid trafikolyckor, stöld och skador på din bil. Den kan inkludera ansvarsförsäkring som täcker skador på andra fordon, egendom eller personer, och kaskoförsäkring som täcker skador på din egen bil vid olyckor, brand eller vandalism.",
    bulletPoints: [
      { title: "Olycksskydd", value: 3000 },
      { title: "Stöldskydd", value: 2500 },
      { title: "Kaskoförsäkring", value: 2000 },
    ],
  },
  {
    title: "Reseförsäkring",
    link: "/reseforsakring",
    image: travel,
    text: "Res tryggt med skydd mot olyckor och sjukdomar när du är utomlands.",
    description:
      "Reseförsäkring skyddar dig mot oväntade händelser under dina resor. Detta inkluderar medicinsk vård vid sjukdom eller skada, evakuering, förlorat eller stulet bagage, och avbeställningsskydd om du måste ställa in eller avbryta din resa. Det kan också täcka juridisk assistans och ansvarsförsäkring vid händelser utomlands.",
    bulletPoints: [
      { title: "Medicinsk vård", value: 3000 },
      { title: "Evakuering", value: 2000 },
      { title: "Bagageskydd", value: 1000 },
    ],
  },
  {
    title: "Livförsäkring",
    link: "/livforsakring",
    image: life,
    text: "Säkra din familjs ekonomiska framtid om något skulle hända dig.",
    description:
      "Livförsäkring ger ekonomiskt skydd till dina nära och kära om du skulle avlida. Försäkringen betalar ut ett engångsbelopp eller en månatlig ersättning till dina förmånstagare, vilket kan hjälpa till att täcka levnadskostnader, skulder, och andra ekonomiska åtaganden.",
    bulletPoints: [
      { title: "Engångsbelopp", value: 5000 },
      { title: "Månatlig ersättning", value: 3000 },
      { title: "Skuldtäckning", value: 2000 },
    ],
  },
  {
    title: "Husdjursförsäkring",
    link: "/husdjursforsakring",
    image: pet,
    text: "Ge ditt husdjur bästa möjliga vård med vår omfattande försäkring.",
    description:
      "Husdjursförsäkring täcker veterinärkostnader om ditt husdjur blir sjukt eller skadat. Den kan också inkludera skydd mot förlust eller stöld av ditt husdjur, och ersättning för kostnader vid avlivning och kremering. Försäkringen kan även täcka ansvarsförsäkring om ditt husdjur orsakar skador på andra personer eller egendom.",
    bulletPoints: [
      { title: "Veterinärkostnader", value: 2500 },
      { title: "Förlustskydd", value: 1500 },
      { title: "Ansvarsförsäkring", value: 1000 },
    ],
  },
  {
    title: "Olycksfallsförsäkring",
    link: "/olycksfallsforsakring",
    image: accident,
    text: "Få ekonomiskt stöd vid olyckor som leder till personskador.",
    description:
      "Olycksfallsförsäkring ger ekonomiskt skydd om du råkar ut för en olycka som leder till fysiska skador. Den kan täcka kostnader för medicinsk behandling, rehabilitering, och ersättning för förlorad arbetsinkomst. Försäkringen kan också ge ersättning för bestående men eller invaliditet.",
    bulletPoints: [
      { title: "Medicinsk behandling", value: 3000 },
      { title: "Rehabilitering", value: 2000 },
      { title: "Arbetsinkomst", value: 1500 },
    ],
  },
  {
    title: "Sjukförsäkring",
    link: "/sjukforsakring",
    image: sick,
    text: "Skydda dig mot ekonomiska förluster vid långvarig sjukdom.",
    description:
      "Sjukförsäkring ger ekonomiskt skydd vid långvarig sjukdom som hindrar dig från att arbeta. Den kan ge ersättning för förlorad arbetsinkomst och hjälpa till att täcka medicinska kostnader och rehabilitering. Försäkringen kan också inkludera stöd för psykisk ohälsa och sjukskrivning.",
    bulletPoints: [
      { title: "Arbetsinkomst", value: 3000 },
      { title: "Medicinska kostnader", value: 2000 },
      { title: "Psykisk ohälsa", value: 1000 },
    ],
  },
  {
    title: "Båtförsäkring",
    link: "/batforsakring",
    image: boat,
    text: "Skydda din båt mot skador, stöld och olyckor till sjöss.",
    description:
      "Båtförsäkring ger skydd för din båt och dess utrustning mot skador, stöld och olyckor. Försäkringen kan täcka skador vid kollisioner, grundstötning, brand och stöld, samt ansvarsförsäkring om du orsakar skador på andra båtar eller personer.",
    bulletPoints: [
      { title: "Skador", value: 3000 },
      { title: "Stöld", value: 2000 },
      { title: "Ansvarsförsäkring", value: 1500 },
    ],
  },
  {
    title: "Inkomstförsäkring",
    link: "/inkomstforsakring",
    image: money,
    text: "Säkerställ din inkomst vid arbetslöshet med vår inkomstförsäkring.",
    description:
      "Inkomstförsäkring ger ekonomiskt skydd om du blir arbetslös. Försäkringen kompletterar a-kassan och kan ge dig upp till 80% av din tidigare lön under en viss period. Detta hjälper dig att behålla din ekonomiska trygghet medan du söker nytt arbete.",
    bulletPoints: [
      { title: "Komplettering av a-kassan", value: 4000 },
      { title: "80% av tidigare lön", value: 3000 },
      { title: "Ekonomisk trygghet", value: 2000 },
    ],
  },
];

export default insuranceData;
