import Menu from "../Components/Menu/Menu";
import Banner from "../Components/Banner/Banner";
import Who from "../Components/Who/Who";
import Count from "../Components/Count/Count";
import Why from "../Components/Why/Why";
import Gallery from "../Components/Gallery/Gallery";
import Video from "../Components/Video/Video";
import Sponsers from "../Components/Sponsers/Sponsers";
import Footer from "../Components/Footer/Footer";
import React from "react";

const Home = () => {
  return (
    <div>
      <Menu />
      <Banner />
      <Who />
      <Count />
      <Why />
      <Gallery />
      <Video />
      <Sponsers />
      <Footer />
    </div>
  );
};

export default Home;
