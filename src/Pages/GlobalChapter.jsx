import React from "react";
import Image from "../Assets/global-chapter.jpg";
import Menu from "../Components/Menu/Menu";
import Count from "../Components/Count/Count";
import Sponsers from "../Components/Sponsers/Sponsers";
import Footer from "../Components/Footer/Footer";

const GlobalChapter = () => {
  return (
    <div>
      <Menu />
      <div className="container-fluid container">
        <div className="imageabout about_img img-fluid">
          <div className="row d-flex flex-row justify-content-between align-items-center">
            <div className="left" id="text">
              <h5>CGI &#123; GLobal Chapter &#125;</h5>
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
            <div className="container text-center">
              <div className="row peronalFull" style={{borderBottom:'none'}}>
                <div
                  className="col-4 personalImagenext"
                  style={{ margin: "5rem", height: "30rem" }}
                >
                  <img src={Image} alt="" style={{ width: "auto" }} />
                </div>
                <div
                  className="col-8 personalText"
                  style={{ marginBottom: "5rem" }}
                >
                  <h1>GLOBAL CHAPTERS</h1>
                  <p>
                    For any entity or business to run, it's necessary that they
                    follow the mandatory government compliances. This proves how
                    crucial role is played by the individuals involved in the
                    compliance process of any venture. These individuals are
                    governed under certain regulatory authorities of Government
                    and are called as professionals (like CA, CS, CFA, CMA etc).
                    Therefore, CGI-Compliance Council is designed to meet the
                    regular audit and compliance requirements of the
                    SBUs/Start-ups/Entrepreneurs and ensure the sustainable
                    growth of the startup Ecosystem.
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

export default GlobalChapter;
