import { Fragment } from "react"
import * as React from "react";
import { Helmet } from "react-helmet";
import "./navbar.css";
import { Link } from "gatsby";
export default function Navbar() {
  const [click, setClick] = React.useState(false)
  const handleclick = () => setClick(!click)
  return (
    <Fragment>
      <Helmet>
        <title>Home</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Helmet>
      <div className="Navbar">
        <div className="N-wrapper">
          <div className="logo">RockQ.dev</div>
          <ul className={click ? "list-menu active" : "list-menu"}>
            <li>
              <Link className="Link" to="/" onClick={handleclick}>
                Home
              </Link>
            </li>
            <li>
              <Link className="Link" to="/About/" onClick={handleclick}>
                AboutMe
              </Link>
            </li>
            <li>
              <Link className="Link" to="/Blog/" onClick={handleclick}>
                Blog
              </Link>
            </li>
            <li>
              <Link className="Link" to="/Galery/" onClick={handleclick}>
                galery
              </Link>
            </li>
          </ul>
          {/* <div className={click ? "icon_sosmed active" : "icon_sosmed"}> */}
          {/*   <i className="fa-brands fa-facebook"></i> */}
          {/*   <i className="fa-brands fa-instagram"></i> */}
          {/*   <i className="fa-brands fa-whatsapp"></i> */}
          {/* </div> */}
          <div className="icon" onClick={handleclick}>
            <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

