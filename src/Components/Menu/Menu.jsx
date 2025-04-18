import React from "react";
import "./Menu.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <Link to ="/" className="logo">
        <img src={logo} alt="" style={{width:'15rem'}}/>
      </Link>
      <input type="checkbox" id="menu_bar"/>
      <label htmlFor="menu_bar"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" className="hamburger" style={{fill:"#ffffff"}}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></label>
      <nav className="navmain" id="navmain">
        <ul className="navbar">
          <li className="navlist">
            <Link to ="/"  className="navtext">
              Home
            </Link>
          </li>
          <li className="navlist">
            <Link to ="/about"  className="navtext">
              About Us
            </Link>
          </li>
          <li className="navlist">
            <Link to =""  className="navtext">
              Leadership
            </Link>
            <ul className="submenu">
              <li className="navlist">
                <Link to ="/chairman" className="navtext">
                  Chairman
                </Link>
              </li>
              <li className="navlist">
                <Link to ="/president"  className="navtext">
                  President
                </Link>
              </li>
              <li className="navlist">
                <Link to ="/director" className="navtext">
                  Director
                </Link>
              </li>
              <li className="navlist">
                <Link to ="/council-of-innovators" className="navtext">
                  Council Of Innovators
                </Link>
              </li>
            </ul>
          </li>
          <li className="navlist">
            <Link to ="/partner-and-associates" className="navtext">
              Partner & Associates
            </Link>
          </li>
          <li className="navlist">
            <Link to ="/global-chapter" className="navtext">
              Global Chapter
            </Link>
          </li>
          <li className="navlist">
            <Link to ="" className="navtext">
              More
            </Link>
            <ul className="submenu">
              <li className="navlist">
                <Link to ="/economic-council" className="navtext">
                  Economic Council
                </Link>
              </li>
              <li className="navlist">
                <Link to ="/ipr-council" className="navtext">
                  IPR Council
                </Link>
              </li>
              <li className="navlist">
                <Link to ="/compliance-council" className="navtext">
                  Compliance Council
                </Link>
              </li>
            </ul>
          </li>
          <li className="navlist">
            <Link to ="/#" className="navtext">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
