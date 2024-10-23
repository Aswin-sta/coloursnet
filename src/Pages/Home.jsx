import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; // Import the Navbar component
import colors from "../assets/colors";
import WhatWeDo from "../components/WhatWeDo";
import OurServices from "../components/OurServices";
import ConnectWithUs from "../components/ConnectWithUs";
import WhyUS from "../components/WhyUS";
import Brands from "../components/Brands";
import Carousel from "../components/Carousel";

const HomePage = () => (
  <div style={{ backgroundColor: colors.background, minHeight: "100vh" }}>
    <Navbar />
    <WhatWeDo />
    <Carousel />
    <OurServices />
    <WhyUS />
    <Brands />
    <ConnectWithUs />
    <Footer />
  </div>
);

export default HomePage;
