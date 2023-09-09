import "../index.css";
import Image from "../Assets/visionmission.png";
import Image_2 from "../Assets/acknoledgement.png";
import Image_3 from "../Assets/hack-a-oreneur.png";
import Image_4 from "../Assets/iot-workshop.png";
import Image_5 from "../Assets/tedx.jpg";
import Image_6 from "../Assets/youth-festical.png";
import React from "react";
import Menu from "../Components/Menu/Menu";
import Count from "../Components/Count/Count";
import Sponsers from "../Components/Sponsers/Sponsers";
import Footer from "../Components/Footer/Footer";

const About = () => {
  return (
    <div>
      <Menu />
      <div className="container-fluid container">
        <div className="imageabout about_img img-fluid">
          <div className="row d-flex flex-row justify-content-between align-items-center">
            <div className="left" id="text">
              <h5>CGI &#123; About Us &#125;</h5>
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
              <div className="row peronalFull">
                <div className="col-4 personalImage">
                  <img src={Image} alt="" />
                </div>
                <div className="col-8 personalText">
                  <h1>VISION AND MISSION</h1>
                  <p>
                    To make the world realize the full potential of what young
                    innovators can do.
                  </p>
                </div>
              </div>
              <div className="row peronalFull">
                <div className="col-8 personalText">
                  <h1>ACKNOWLEDGEMENTS</h1>
                  <p>
                    Hosting events has always been the specialty of CGI. We have
                    had various achievements that helped us grow exponentially.
                    From education sector to innovation sector, we as a
                    community have worked tirelessly in order to help the
                    ideators polish their skills.
                  </p>
                </div>
                <div className="col-4 personalImage">
                  <img src={Image_2} alt="" />
                </div>
              </div>
            </div>
            <div className="containernew text-center">
              <div className="row peronalFull" style={{paddingBottom:'5rem'}}>
                <div className="col-4 personalImagenext">
                  <img src={Image_3} alt="" />
                </div>
                <div className="col-8 personalText">
                  <h1>HACK-A-PRENEUR</h1>
                  <p>
                    One of the recent events being publicized, Hack-A-Preneur.
                    Hack-A-Preneur a global virtual Hackathon is held to
                    encourage and support the innovators of the world regardless
                    of their technical expertise. This event was opened for
                    everyone who needs guidance, resources, and funding to get
                    started. It provided every dedicated being with a wonderful
                    opportunity to enter into the entrepreurship realm and
                    introduce his innovation to the world.
                  </p>
                </div>
              </div>
              <div className="row peronalFull" style={{paddingBottom:'5rem'}}>
                <div className="col-8 personalText">
                  <h1>IOT WORKSHOP</h1>
                  <p>
                    IOT seminar was organized for the students of Chandigarh
                    University where students from every branch were eager to
                    learn about Internet Of Things. Proficient speakers were
                    present to show the ropes regarding the technology and were
                    very efficient in grasping the attention of every knowledge
                    seeker present by giving live demonstrations and guiding
                    through every basic aspect of the technology.
                  </p>
                </div>
                <div className="col-4 personalImagenext">
                  <img src={Image_4} alt="" />
                </div>
              </div>
              <div className="row peronalFull" style={{paddingBottom:'5rem'}}>
                <div className="col-4 personalImagenext">
                  <img src={Image_5} alt="" />
                </div>
                <div className="col-8 personalText">
                  <h1>TEDX</h1>
                  <p>
                    TEDx is a TED program that enables volunteers to
                    independently organize TED-like events in their local
                    communities. Under a license granted by TED, hardworking
                    volunteers produce events and curate speakers to celebrate
                    local ideas, shift perspectives, and ultimately change
                    lives. Such similar event was organized by the the
                    co-founder of CGI within the premises of Chandigarh
                    University.Mr.NileshSinha the CEO and chairman of CGI
                    organized TEDX within the premises of Chandigarh University
                  </p>
                </div>
              </div>
              <div className="row peronalFull" style={{paddingBottom:'5rem'}}>
                <div className="col-8 personalText">
                  <h1>PUNJAB YOUTH FESTIVAL</h1>
                  <p>
                    CGI served as an exclusive outreach partner of CU-TBI for
                    inviting and coordinating with outside MSMEs and Start-ups
                    during the Punjab State Government Start-up Expo in
                    collaboration with Chandigarh University. CGI also aims at
                    spreading awareness related to various Government and allied
                    schemes through which they can be benefitted.
                  </p>
                </div>
                <div className="col-4 personalImagenext">
                  <img src={Image_6} alt="" />
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

export default About;
