import React from "react";
import Image from "../Assets/geetika.jpg";
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

const President = () => {
  return (
    <div>
      <Menu />
      <div className="container-fluid container">
        <div className="imageabout about_img img-fluid" id="imageabout">
          <div className="row d-flex flex-row justify-content-between align-items-center">
            <div className="left" id="text">
              <h5>CGI &#123; President &#125;</h5>
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
            <div className="containernew text-center my-5">
              <div className="row peronalFull" id="leader__full">
                <div
                  className="col-8 personalText"
                  style={{ width: "70%", marginRight: "10rem" }}
                >
                  <p style={{ textAlign: "justify" }}>
                    Completed Btech-CSE in the year 2016 and has the vibrant
                    experience in IT field. Also has 3+ years’ experience in
                    corporate world. Her goal is to hold a Senior Corporate
                    position along with being a Philanthropist. She had a very
                    sound communication and Technical skills and regularly
                    participate as an invited/guest delegate in many IT
                    Conclave, Summit and Sessions organized by FICCI, CII,
                    ASSOCHAM, ICC etc. Experienced Software Engineer with a
                    demonstrated history of working in Computer Software
                    Industry, she has also completed her MBA in Business
                    Analytics and Human Resource in the year 2020. As far as the
                    Analytical expertise is concerned, she is good in data
                    collection, preparation and cleansing and working on a
                    software like Watson, Cognos, SPSS and Google Analytics. Er.
                    Geetika Pandey is also the Co-Founder and HOD (IT Departt.),
                    SewaPoint.As a social researcher with many years of
                    experience and understanding of peoples’ needs and
                    requirements, specially related to Governance based on ITES.
                    Being a Technocrat, she has become an ace in Technical error
                    solving and rectifications. Working on a vision of Women
                    Empowerment, she keeps sensitizing with SHGs and NGOs for
                    creating self-reliant revenue model.As a philanthropist
                    dedicated towards women empowerment she has travelled from
                    metropolitans to best of cosmopolitans, Tier 2 cities, small
                    cities, semi-urban areas, suburban regions and even in rural
                    areas situated in the remotest of places to meet for
                    awareness among the BoP (bottom of the pyramid) and
                    upliftment of the weakest and backward sections of the
                    society. With her mantra of “Using Science for Serving the
                    Society” she believes that modern day technology can be the
                    best medium to bridge the gap between the unskilled labor
                    and the employable opportunities.
                  </p>
                </div>
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
                      width: "30rem",
                      height: "30rem",
                      border: "10px solid var(--hovertext-color)",
                      borderRadius: "50%",
                      marginBottom: "5rem",
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
                  <h1>GEETIKA PANDEY</h1>
                  <p>President</p>
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

export default President;
