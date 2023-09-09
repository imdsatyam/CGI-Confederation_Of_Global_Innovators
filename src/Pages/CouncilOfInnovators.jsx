import React from "react";
import Image from "../Assets/nilesh-sinha.png";
import Image_2 from "../Assets/geetika.jpg";
import Image_3 from "../Assets/priyankas.jpg";
import Image_4 from "../Assets/sailesh.png";
import Image_5 from "../Assets/rohit.png";
import Menu from "../Components/Menu/Menu";
import Count from "../Components/Count/Count";
import Sponsers from "../Components/Sponsers/Sponsers";
import Footer from "../Components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const CouncilOfInnovators = () => {
  return (
    <div>
      <Menu />
      <div className="container-fluid container">
        <div className="imageabout about_img img-fluid" id="imageabout">
          <div className="row d-flex flex-row justify-content-between align-items-center">
            <div className="left" id="text">
              <h5>CGI &#123; Council Of Innovators &#125;</h5>
              <p>
                Connecting for <em>contributing</em> Interacting for{" "}
                <span>Innovating</span>
              </p>
              <button className="btn">
                Join With Us{" "}
                <svg
                  className="svg-inline--fa fa-angle-double-right fa-w-14"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-double-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
                  ></path>
                </svg>
              </button>
            </div>
            <div Name="container text-center">
              <div className="row peronalFull">
                <div
                  className="col-4 personalImagenext"
                  style={{
                    width: "30%",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={Image}
                    alt=""
                    style={{
                      width: "15rem",
                      height: "15rem",
                      border: "10px solid var(--hovertext-color)",
                      borderRadius: "50%",
                      marginBottom: "2rem",
                      marginRight: "5rem",
                      marginLeft: "5rem",
                    }}
                  />
                  <div className="icon">
                    <a href="/#">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="/#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="/#">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
                <div
                  className="col-8 personalText"
                  style={{ marginBottom: "5rem" }}
                >
                  <h1>NILESH SINHA</h1>
                  <p>
                    Mr. Nilesh Sinha is an E-governance and Financial Inclusion
                    professional with years of experience in the ecosystem,
                    specially in India and Asia Pacific. Specialized in
                    networking and communicating with institutions and
                    authorities and recipient of 3rd position in the
                    International Innovation Fair 2017, Vizag.
                  </p>
                </div>
              </div>
              <div className="row peronalFull">
                <div
                  className="col-4 personalImagenext"
                  style={{
                    width: "30%",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={Image_2}
                    alt=""
                    style={{
                      width: "15rem",
                      height: "15rem",
                      border: "10px solid var(--hovertext-color)",
                      borderRadius: "50%",
                      marginBottom: "2rem",
                      marginRight: "5rem",
                      marginLeft: "5rem",
                    }}
                  />
                </div>
                <div
                  className="col-8 personalText"
                  style={{ marginBottom: "5rem" }}
                >
                  <h1>ER. GEETIKA PANDEY</h1>
                  <p>
                    A Technology enthusiast, Er. Geetika Pandey was one of the
                    top scorers of her city during matriculation examination.
                    Consistently being exceptionally well in academia, her core
                    competency lies in the strong domain knowledge. Apart from
                    studies, she is extremely friendly as well as amaible in
                    nature and has well handles the onboarding and operational
                    process of CGI at such a young age. She is also one of the
                    few founding members of CGI.
                  </p>
                </div>
              </div>
              <div className="row peronalFull">
                <div
                  className="col-4 personalImagenext"
                  style={{
                    width: "30%",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={Image_3}
                    alt=""
                    style={{
                      width: "15rem",
                      height: "15rem",
                      border: "10px solid var(--hovertext-color)",
                      borderRadius: "50%",
                      marginBottom: "2rem",
                      marginRight: "5rem",
                      marginLeft: "5rem",
                    }}
                  />
                  <div className="icon">
                    <a href="/#">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="/#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="/#">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
                <div
                  className="col-8 personalText"
                  style={{ marginBottom: "5rem" }}
                >
                  <h1>PRIYANKA PANDEY</h1>
                  <p>
                    She evaluates her nature of work and on the off chance that
                    she is not fulfilled again she gets to her expertise until
                    to nature of work. CGI is platform where all innovators are
                    meet and she is the one of them. Priyanka is a
                    womentrepreneur with vision , mission and lessons to grow
                    with CGI.
                  </p>
                </div>
              </div>
              <div className="row peronalFull">
                <div
                  className="col-4 personalImagenext"
                  style={{
                    width: "30%",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={Image_4}
                    alt=""
                    style={{
                      width: "15rem",
                      height: "15rem",
                      border: "10px solid var(--hovertext-color)",
                      borderRadius: "50%",
                      marginBottom: "2rem",
                      marginRight: "5rem",
                      marginLeft: "5rem",
                    }}
                  />
                  <div className="icon">
                    <a href="/#">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="/#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="/#">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
                <div
                  className="col-8 personalText"
                  style={{ marginBottom: "5rem" }}
                >
                  <h1>SAILESH SINHA</h1>
                  <p>
                    A mechanical engineering graduate. Has interest in teaching
                    and public policy. When not doing that you can find him
                    going through all kinds of tech news. A former competitive
                    debator, he loves reading didactic and academic literature.
                    Has worked with the district administration for the
                    implementation of digital India and raising awareness about
                    digital transactions. Has worked with various government
                    agencies and District Administration departments in
                    spreading education to the underprivileged.
                  </p>
                </div>
              </div>
              <div className="row peronalFull" style={{ borderBottom: "none" }}>
                <div
                  className="col-4 personalImagenext"
                  style={{
                    width: "30%",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={Image_5}
                    alt=""
                    style={{
                      width: "15rem",
                      height: "15rem",
                      border: "10px solid var(--hovertext-color)",
                      borderRadius: "50%",
                      marginBottom: "2rem",
                      marginRight: "5rem",
                      marginLeft: "5rem",
                    }}
                  />
                  <div className="icon">
                    <a href="/#">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="/#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="/#">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
                <div
                  className="col-8 personalText"
                  style={{ marginBottom: "5rem" }}
                >
                  <h1>ROHIT ADLAKHA</h1>
                  <p>
                    A technocrat turning entrepreneur, Rohit is a growth hacker
                    for every situation. With his specialization in IoT wirless
                    technology, he has created several prototypes in fields of
                    agritech/human safety/medical. He aims at solving real world
                    problems with technology solving real world problems. Not
                    just a tech geek, he is also a marketing strategist with
                    brilliant ideas and aim at making the world a better place.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Count />
          <Sponsers />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CouncilOfInnovators;
