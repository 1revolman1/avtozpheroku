import React, { Component } from "react";
import styled from "styled-components";
import styles from "./Slider.module.scss";
import "./dots.scss";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const StyledCarousel = styled(Carousel)`
  position: relative;
  overflow: initial;
  .BrainhubCarousel__track {
    align-items: flex-start;
  }
  .BrainhubCarousel__arrows {
    position: absolute;
    z-index: 1;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.2);
    border: solid 1px #f9f9f9;
    background-color: #ffffff;
    border-radius: 50%;
    &.BrainhubCarousel__arrowRight {
      left: 98%;
      @media screen and (max-width: 425px) {
        left: 90%;
      }
    }
    &.BrainhubCarousel__arrowLeft {
      right: 98%;
      @media screen and (max-width: 425px) {
        right: 90%;
      }
    }
    &:hover {
      background: white;
      &:enabled {
        background: white;
      }
    }
    span {
      border-color: black;
      border-width: 2px 2px 0 0;
      &:hover {
        border-color: initial;
        &:enabled {
          border-color: initial;
        }
      }
    }
  }
`;
export default class SliderComponent extends Component {
  renderBlock = () => {
    let array = [
      {
        img: "https://shop.autoopora.com/fotos/cache/4141055Z_1-238x238.jpg",
        text: "Power window control unit Lanos, Sens 2 clav GM",
        price: "12 981.32 $",
      },
      {
        img: "https://shop.autoopora.com/fotos/cache/411411Z_1-238x238.jpg",
        text: "Aveo AT rear gas oil shock absorber (strut)",
        price: "812.42 $",
      },
      {
        img: "https://shop.autoopora.com/fotos/cache/0741002Z_1-238x238.jpg",
        text: "Camshaft Tavria, 1102, 1103, 1105 Auto (camshaft)",
        price: "812.42 $",
      },
      {
        img: "https://shop.autoopora.com/fotos/cache/0741002Z_1-238x238.jpg",
        text: "Camshaft Tavria, 1102, 1103, 1105 Auto (camshaft)",
        price: "812.42 $",
      },
    ];
    let block = array.map((data, index) => {
      return (
        <div key={index} className={styles.blockSlide}>
          <img src={data.img} alt="img slide" />
          <h5>{data.text}</h5>
          <span>{data.price}</span>
        </div>
      );
    });
    return block;
  };
  render() {
    return (
      <div className={styles.blockSlider}>
        <h2>You looked at goods</h2>
        <StyledCarousel
          className={styles.blockSlider__slider}
          slidesPerPage={4}
          dots
          arrows
          infinite
          clickToChange
          keepDirectionWhenDragging
          breakpoints={{
            600: {
              slidesPerPage: 1,
              arrows: false,
            },
            900: {
              slidesPerPage: 2,
              arrows: false,
            },
            1400: {
              slidesPerPage: 3,
            },
          }}
        >
          {this.renderBlock()}
        </StyledCarousel>
      </div>
    );
  }
}
