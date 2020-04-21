import React, { Component } from "react";
// import styled from "styled-components";
import styles from "./Card.module.scss";
import cart from "../../assets/supermarket.svg";
export default class Card extends Component {
  render() {
    return (
      <div className={styles.productCard}>
        <div className={styles.productCard_imagebl}>
          <img
            alt="oil"
            src="https://shop.autoopora.com/fotos/cache/410799978887Z_1-238x238.JPG"
          />
        </div>
        <div className={styles.productCard_textContent}>
          <h4>Castrol</h4>
          <h2>Масло GM Motor Oil 1л 10W40 (полусинтетика)</h2>
          <p>Код товара: 410799978887Z</p>
          <p>Кат. номер: GH0W20FS1</p>
        </div>
        <div className={styles.productCard_priceList}>
          <p>511.80 грн.</p>
          <div className={styles.productCard_priceList_buttons}>
            <div className={styles.productCard_priceList_buttons_counter}>
              <span>1</span>
              <div
                className={styles.productCard_priceList_buttons_counter_button}
              >
                <button pos="dec">
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                    class="css-6q0nyr-Svg"
                  >
                    <path
                      fill="grey"
                      d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                    ></path>
                  </svg>
                </button>
                <button pos="inc">
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                    class="css-6q0nyr-Svg"
                  >
                    <path
                      fill="grey"
                      d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles.productCard_priceList_buttons_toCart}>
              <p>В корзину</p>
              <img alt="cart" src={cart} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
