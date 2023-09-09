import React from "react";
import Image from "../Assets/nilesh-sinha.png";
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

const Chairman = () => {
  return (
    <div>
      <Menu />
      <div className="container-fluid container">
        <div className="imageabout about_img img-fluid" id="imageabout">
          <div className="row d-flex flex-row justify-content-between align-items-center">
            <div className="left" id="text">
              <h5>CGI &#123; Chairman &#125;</h5>
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
                    With his 1st startup at an age of 14 years, Mr. Nilesh Sinha
                    has an experience of working with many startups. As an
                    E-governance and Financial Inclusion professional with years
                    of experience in the ecosystem, especially in India, he is
                    specialized in networking and communicating with
                    institutions and authorities. Recipient of 3rd position in
                    the International Innovation Fair 2017, Vizag, Mr. Sinha has
                    been regularly invited as a guest speaker and panelist for
                    various corporate events and panel discussions. In his
                    unique approach, he emphasizes on empowering the innovators.
                    He says that a true innovator can be anyone from any
                    professional, geographical or other background. In his
                    version, a five-year-old kid practicing python to a 67 years
                    old Colonel Sanders opening world’s most liked chicken
                    restaurant chain, every person with a unique approach or
                    solution is an innovator. Also being a trained Hindustani
                    Classical singer, Mr. Sinha promotes living a life with a
                    balance among all the aspects of life including the
                    professional commitments, paying proper attentions towards
                    your hobbies to respecting your friends and family members.
                    This is what he considers as his success mantra for wining
                    many National level competitions and titles. He regularly
                    writes blogs and articles based on the current startup and
                    corporate ecosystem as well as on latest academic and
                    technological trends on global perspective (like:
                    Blockchain, IoT, Big Data etc.) On his mission of
                    Gamification of Innovation, he has so far been a guest
                    speaker at 40+ schools, colleges and educational
                    institutions impacting the life of more than Sixty thousand
                    learners and innovators.
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
                      <FontAwesomeIcon icon={faFacebookF}/>
                    </a>
                    <a href="/#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="/#">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </div>
                  <h1>NILESH SINHA</h1>
                  <p>Chairman</p>
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

export default Chairman;
