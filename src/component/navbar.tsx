import * as React from "react";
import { Helmet } from "react-helmet";
import "./navbar.css";
import { Link } from "gatsby";
const Navbar = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="Navbar">
        <div className="N-wrapper">
          <div className="logo">Rocky</div>
          <ul className="list-menu">
            <li>
              <Link className="Link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="Link" to="/about">
                AboutMe
              </Link>
            </li>
            <li>
              <Link className="Link" to="/contac">
                Contac
              </Link>
            </li>
            <li>
              <Link className="Link" to="/galery">
                galery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
