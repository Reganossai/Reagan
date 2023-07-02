import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Deals from "./Deals";

const Home = () => {
  return (
    <div className="home">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      {/* <Newsletter />
      <Deals/>
      <Footer /> */}
      
    </div>
  );
};

export default Home;
