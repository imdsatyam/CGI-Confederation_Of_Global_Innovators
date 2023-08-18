import "./Menu.css";
import logo from "../../Assets/logo.png";

function Menu() {
  return (
    <div className="menu">
      <div className="logo">
        <a href="/#" className="">
          <img src={logo} alt="" />
        </a>
      </div>
      <ul className="navbar">
        <li className="navlist">
          <a href="/#" className="navtext">
            Home
          </a>
        </li>
        <li className="navlist">
          <a href="/#" className="navtext">
            About Us
          </a>
        </li>
        <li className="navlist">
          <a href="/#" className="navtext">
            Leadership
          </a>
        </li>
        <li className="navlist">
          <a href="/#" className="navtext">
            Partner & Associates
          </a>
        </li>
        <li className="navlist">
          <a href="/#" className="navtext">
            Global Chapter
          </a>
        </li>
        <li className="navlist">
          <a href="/#" className="navtext">
            More
          </a>
        </li>
        <li className="navlist">
          <a href="/#" className="navtext">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
