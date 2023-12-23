import { FaTimes, FaBars, FaFolderOpen, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="header">
      <div className="container d_flex">
        <div className="categories d_flex">
          <span>
            <FaFolderOpen size={20} />
          </span>
          <h4>
            Categories <FaChevronDown />
          </h4>
        </div>
        <div className="navlink">
          <ul
            className={
              MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
            }
            onClick={() => setMobileMenu(false)}
          >
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/pages">pages</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
            <li>
              <Link to="/user">user</Link>
            </li>
            <li>
              <Link to="/track">track</Link>
            </li>
          </ul>
          <div>
            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <FaTimes className="close home-btn" />
              ) : (
                <FaBars className="open" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
