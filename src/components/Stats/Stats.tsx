import { Statistics } from "../../types";
import "./Stats.scss";

/**
 * * This component is a simple stats component that takes in a title, subtitle and a list of statistics.
 * * The statistics are displayed in a grid with 4 columns and the title and subtitle are displayed above the grid.
 * @param title - The title of the stats component.
 * @param subtitle - The subtitle of the stats component.
 * @param statsList - A list of statistics to display follwing the interface of Statistics.
 */

type Props = {
  title: string;
  subtitle: string;
  statsList: Statistics[];
};

const Stats = ({ title, subtitle, statsList }: Props) => {
  return (
    <div className="container">
      <div className="text__stats">
        <h2 className="text-center">{title}</h2>
        <p className="text-center">{subtitle}</p>
      </div>
      <dl className="stats">
        {statsList?.map((stat, index) => (
          <div className="stats__container" key={stat.id}>
            <dt className="text-3xl">{stat.points}</dt>
            <dd>{stat.text}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Stats;
