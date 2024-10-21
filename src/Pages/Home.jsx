import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; // Import the Navbar component
import colors from "../assets/colors";
import WhatWeDo from "../components/WhatWeDo";
import OurServices from "../components/OurServices";
import ConnectWithUs from "../components/ConnectWithUs";

const HomePage = () => (
  <div style={{ backgroundColor: colors.background, minHeight: "100vh" }}>
    <Navbar />
    <WhatWeDo />
    <OurServices />
    <ConnectWithUs />
    <Footer />
  </div>
);

export default HomePage;
