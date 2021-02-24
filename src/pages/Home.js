import React from "react";
import MainLayout from "../components/MainLayout";
import banner from "../image/banner.png";

const Home = () => {
  return (
    <MainLayout>
      <img src={banner} id="banner" />
    </MainLayout>
  );
};

export default Home;
