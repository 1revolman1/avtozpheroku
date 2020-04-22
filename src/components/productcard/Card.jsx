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
    const { view, proizvod, text, code, price, img } = this.props;
    return (
      <div view={view} className={styles.productCard}>
        <div className={styles.productCard_imagebl}>
          <img alt="oil" src={img} />
        </div>
        <div className={styles.productCard_textContent}>
          <h4>{proizvod}</h4>
          <h2>{text}</h2>
          <p>{code[0]}</p>
          <p>{code[1]}</p>
        </div>
        <div className={styles.productCard_priceList}>
          <p>{price}</p>
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
