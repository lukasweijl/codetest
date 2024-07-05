import { Statistics } from "../types";

/**
 * * Statistics Data - contains all the statistics data.
 * Used to display the statistics cards.
 * TODO: Future implementation could include fetching data from an API.
 */

const statsData: Statistics[] = [
  {
    id: 1,
    text: "Kunder",
    points: "1 000 000",
  },
  {
    id: 2,
    points: "4,9/5",
    text: "Trygghet",
  },
  {
    id: 3,
    text: "Årets företag",
    points: "2023",
  },
  {
    id: 4,
    text: "Trygghet",
    points: "100%",
  },
];

export default statsData;
