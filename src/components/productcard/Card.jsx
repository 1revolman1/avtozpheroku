import React, { Component } from "react";
import styled from "styled-components";
import styles from "./Card.module.scss";
import cart from "../../assets/supermarket.svg";
import star from "../../assets/star.svg";
import Counter from "./counter/Counter";

const BlockFavourite = styled.div`
  background: ${(props) => (props.active ? "#cce5c9" : "#d9d9d9")};
`;

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      inCart: false,
      inFavourite: false,
      buyerslike: false,
      hotprice: false,
    };
  }
  render() {
    const { hotprice, buyerslike } = this.state;
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
            <Counter />
            <div className={styles.productCard_priceList_buttons_toCart}>
              <p>В корзину</p>
              <img alt="cart" src={cart} />
            </div>
          </div>
        </div>
        <BlockFavourite
          onClick={() =>
            this.setState({ inFavourite: !this.state.inFavourite })
          }
          active={this.state.inFavourite}
          className={styles.productCard_favourite}
        >
          <img src={star} alt="star" />
        </BlockFavourite>
        <div className={styles.productCard_categories}>
          {buyerslike ? (
            <div className={styles.productCard_categories_percent}>
              <span>–12%</span>
            </div>
          ) : null}
          {hotprice ? (
            <div className={styles.productCard_categories_hot}>
              <span>Хит продаж</span>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
