import React from "react";
import Header from "../components/header/Header";
import NowPage from "../components/nowpage/Nowpage";
import BlComponent from "../components/blockcomponent/BlComponent";
import TextImg from "../components/textimgcomponent/TextImgComponent";
import SliderComponent from "../components/slidercomponent/SliderComponent";
import Footer from "../components/footer/Footer";
export default function Main() {
  return (
    <React.Fragment>
      <Header />
      <NowPage
        pageadress={[
          { title: "Главная", to: "/main" },
          { title: "Технические жидкости", to: "/teh-jidkost" },
          { title: "Масло моторное", to: "/maslo-motor" },
        ]}
      />
      <BlComponent />
      <TextImg />
      <SliderComponent />
      <Footer />
    </React.Fragment>
  );
}
