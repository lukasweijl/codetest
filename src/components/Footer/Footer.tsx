import { websitePages } from "../../data/websitePages";
import "./Footer.scss";
import { Link } from "react-router-dom";

/**
 * * Footer - Displays the footer of the website
 * @returns {React.FunctionComponent}
 */

const Footer = () => {
  return (
    <footer>
      <ul className="footer__container">
        {websitePages.map((page, index) => (
          <li key={index}>
            <Link className="link" to={page.link}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
