import React, { Component } from "react";
import styles from "./Slider.module.scss";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
export default class SliderComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.blockSlider}>
        <h2>Вы просматривали товары</h2>{" "}
        <Carousel
          slidesPerPage={4}
          dots
          centered
          arrows
          infinite
          clickToChange
          keepDirectionWhenDragging
          autoPlay={2000}
          animationSpeed={1000}
          breakpoints={{
            640: {
              slidesPerPage: 1,
            },
            900: {
              slidesPerPage: 2,
            },
            1400: {
              slidesPerPage: 3,
            },
          }}
        >
          <img src="https://shop.autoopora.com/fotos/cache/0741002Z_1-238x238.jpg" />
          <img src="https://shop.autoopora.com/fotos/cache/411411Z_1-238x238.jpg" />
          <img src="https://shop.autoopora.com/fotos/cache/4141055Z_1-238x238.jpg" />
          <img src="https://shop.autoopora.com/fotos/cache/0741002Z_1-238x238.jpg" />
          <img src="https://shop.autoopora.com/fotos/cache/411411Z_1-238x238.jpg" />
          <img src="https://shop.autoopora.com/fotos/cache/4141055Z_1-238x238.jpg" />
        </Carousel>
      </div>
    );
  }
}
