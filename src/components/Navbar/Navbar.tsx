import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/if-logo.svg";
import "./Navbar.scss";
import { useState } from "react";
import { websitePages } from "../../data/websitePages";

/**
 * * Navbar component, used for the navigation bar
 * * Passed to the Layout component
 * @returns {JSX.Element} - Rendered Navbar component
 */

const Navbar = () => {
  // Checks the current path and sets the active link
  const url = useLocation().pathname.split("/")[1];
  const path = `/${url}`;

  // State for the mobile menu
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* Logo */}
      <div className="nav__container">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        {/* Links to different pages */}
        <nav className={`nav ${isOpen && "nav-open"}`}>
          <ul className="nav__list">
            {websitePages.map((page, index) => (
              <li key={index} className="nav__item">
                <Link
                  onClick={() => setIsOpen(false)}
                  to={page.link}
                  className={`nav__link ${
                    path === page.link ? "nav__link--active" : ""
                  }`}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        <button
          className={`nav__toggle ${isOpen && "nav-open"}`}
          onClick={handleOpenMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
