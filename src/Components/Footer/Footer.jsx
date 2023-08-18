import "./Footer.css";
import LogoFooter from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="main__footer">
      <div className="footer">
        <h2>JOIN NEWSLETTER</h2>
        <div className="newsle">
          <input
            type="email"
            placeholder="Enter Email id here..."
            className="input__email"
          />
          <button>Subscribe</button>
        </div>
        <div className="footer__info">
          <div className="logofooter">
            <img src={LogoFooter} alt="" />
          </div>
          <div className="address">
            <h4>OUR OFFICE</h4>
            <p>Chandigarh University CU-TBI office, Gharuan, Punjab 140413</p>
          </div>
          <div className="logo__foo">
            <h4>OUR OFFICE</h4>
            <p>You should connect social area for Any update</p>
            <ul>
              <li>
                <a href="/#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="/#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="/#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copywrite">
        © Confederation of Global Innovators 2019 - 2020
      </div>
    </div>
  );
}

export default Footer;
