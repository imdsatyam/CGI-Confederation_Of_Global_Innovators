import React from "react";
import Image from "../Assets/chandigarh-university-seal.png";
import Image_2 from "../Assets/sewa-point-logo.png";
import Image_3 from "../Assets/cu-tbi-logo.png";
import Image_4 from "../Assets/harpal-news-logo.png";
import Image_5 from "../Assets/cueats.png";
import Image_6 from "../Assets/campare.jpg";
import Image_7 from "../Assets/titanium-logo.png";
import Menu from "../Components/Menu/Menu";
import Count from "../Components/Count/Count";
import Sponsers from "../Components/Sponsers/Sponsers";
import Footer from "../Components/Footer/Footer";

const PartnerAndAssociates = () => {
  return (
    <div>
      <Menu />
      <div className="container-fluid container">
        <div className="imageabout about_img img-fluid">
          <div className="row d-flex flex-row justify-content-between align-items-center">
            <div className="left" id="text">
              <h5>CGI &#123; Partners And Asscociates &#125;</h5>
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
                <div className="col-4 personalImagenext" style={{ margin: "5rem" }}>
                  <img src={Image} alt="" />
                </div>
                <div
                  className="col-8 personalText"
                  style={{ marginBottom: "5rem" }}
                >
                  <h1>CHANDIGARH UNIVERSITY</h1>
                  <p>
                    Since its inception Chandigarh University has aimed to
                    improve employment opportunities for the people and to
                    support the community by providing access to relevant
                    applied knowledge. A unique platform that facilitates
                    students and peers to the process of product development,
                    business development and entrepreneurship.
                  </p>
                </div>
              </div>
              <div className="row peronalFull">
                <div
                  className="col-8 personalText"
                  style={{ marginBottom: "5rem"}}
                >
                  <h1>SEWAPOINT</h1>
                  <p>
                    Technology company which is based on Information Technology
                    enabled Services. It mainly involves delivering mandatory
                    Government and Banking services to the Bottom of the
                    Pyramid, particularly in the rural areas.
                  </p>
                </div>
                <div
                  className="col-4 personalImagenext"
                  style={{ margin: "5rem", width: "30%" }}
                >
                  <img src={Image_2} alt="" />
                </div>
              </div>
              <div className="row peronalFull">
                <div className="col-4 personalImagenext" style={{ margin: "5rem" }}>
                  <img src={Image_3} alt="" />
                </div>
                <div
                  className="col-8 personalText"
                  style={{ marginBottom: "5rem" }}
                >
                  <h1>SMART SOLUTION TECHNOLOGY (SSTECH)</h1>
                  <p>
                    It is a IT company which provides all the all kinds of OEM
                    services to boost your ecosystem web dev/app dev/machine
                    learning /data sci projects with latest technology and frame
                    works.They also provide services for latest emerging
                    technology like Internet of Things, Cloud Computing to help
                    you get started in the IT industry.
                  </p>
                </div>
              </div>
              <div className="row peronalFull">
                <div
                  className="col-8 personalText"
                  style={{ marginBottom: "5rem" }}
                >
                  <h1>HARPAL NEWS</h1>
                  <p>
                    Harpal News is a technology website which not only focuses
                    on the emerging technologies but also tries to bring a
                    change in people’s life by updating them with events and
                    some best resources so that the youth of our country can be
                    updated. With every phase of our life, we tend to stand at
                    divergence, what to choose, and what not? So at Harpal News,
                    we try to bring the best decisions of your life on your
                    tips. Just login to our application or website or any of our
                    social pages and boom you are into the world of knowledge,
                    updated and upgraded. Every time you log in, you will see
                    the best and rare technologies, which have been compromised
                    or suppressed under our daily schedules.
                  </p>
                </div>
                <div
                  className="col-4 personalImagenext"
                  id="Imagelogo"
                  style={{ margin: "10rem", width: "40%" }}
                >
                  <img src={Image_4} alt="" />
                </div>
              </div>
              <div className="row peronalFull">
                <div
                  className="col-4 personalImagenext"
                  style={{ margin: "15rem", width: "30%" }}
                >
                  <img src={Image_5} alt="" />
                </div>
                <div
                  className="col-8 personalText"
                  style={{ marginBottom: "5rem" }}
                >
                  <h1>CUEATS</h1>
                  <p>
                    IA food delivery startup for campuses. Get hot fresh food
                    deivered directly to your hostel doorstep. Partnering with
                    all the canteens in the campus, they make sure to give you
                    delicious perfectly cooked meal from your choice of canteen
                    directly at your doorstep with 0 additional charges.
                  </p>
                </div>
              </div>
              <div className="row peronalFull">
                <div
                  className="col-8 personalText"
                  style={{ marginBottom: "5rem" }}
                >
                  <h1>COMPARESATHI</h1>
                  <p>
                    Comparesathi is a rapidly growing company.It is an advanced
                    product search engine to search for products and compare
                    them from different websites i.e Amazon, Flipkart, snapdeal,
                    jaboong, myntra...and many more. We have also tied up with
                    these brands to provide you cashback on every purchase you
                    make through us.
                  </p>
                </div>
                <div className="col-4 personalImagenext" style={{ margin: "5rem" }}>
                  <img src={Image_6} alt="" />
                </div>
              </div>
              <div className="row peronalFull" style={{borderBottom:'none'}}>
                <div
                  className="col-4 personalImagenext"
                  style={{ margin: "5rem", width: "30%" }}
                >
                  <img src={Image_7} alt="" />
                </div>
                <div className="col-8 personalText">
                  <h1>TITANIUM INDUSTRIES</h1>
                  <p>
                    Aim at providing smart products in every domain that gives
                    you a step towards more advanced future. The best in class
                    and never compromising on quality startup, also looking
                    after all the customer needs. From PCB's to embedded
                    systems, they cover it all.
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

export default PartnerAndAssociates;
