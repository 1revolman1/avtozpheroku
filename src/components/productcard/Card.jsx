import React from "react";
import styled from "styled-components";
import styles from "./Card.module.scss";
import cart from "../../assets/supermarket.svg";
import star from "../../assets/star.svg";
import cartStyle from "./counter/Counter.module.scss";

import { LazyLoadImage } from "react-lazy-load-image-component";

const BlockFavourite = styled.div`
  background: ${(props) => (props.active ? "#35889aa1" : "#d9d9d9")};
`;

export default class Card extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      inCart: false,
      inFavourite: false,
      product: null,
    };
  }

  componentDidMount = (e) => {
    this.setState({ product: this.props.data });
    if (this.props.inFavouriteInit) {
      this.setState({ inFavourite: this.props.inFavouriteInit });
    }
  };
  componentDidUpdate = (e) => {
    if (this.state.product.code[0] !== this.props.data.code[0])
      this.setState({ product: this.props.data });
    if (this.state.inFavourite !== this.props.inFavouriteInit) {
      this.setState({ inFavourite: this.props.inFavouriteInit });
    }
  };
  render() {
    const {
      proizvod,
      text,
      code,
      price,
      img,
      buyerslike,
      hotprice,
    } = this.props.data;
    const { view, setInfavourite, deleteInfavourite, setInbuy } = this.props;
    return (
      <div view={view} className={styles.productCard}>
        <div className={styles.productCard_imagebl}>
          <LazyLoadImage alt="oil" src={img} />
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
            <div className={cartStyle.cardCounter}>
              <span>{this.state.count}</span>
              <div className={cartStyle.cardCounter_button}>
                <button
                  pos="inc"
                  onClick={() => this.setState({ count: this.state.count + 1 })}
                >
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="grey"
                      d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                    ></path>
                  </svg>
                </button>
                <button
                  pos="dec"
                  onClick={() => {
                    if (this.state.count > 1)
                      return this.setState({ count: this.state.count - 1 });
                  }}
                >
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="grey"
                      d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              onClick={() => {
                setInbuy(this.props.data, this.state.count);
              }}
              className={styles.productCard_priceList_buttons_toCart}
            >
              <p>In cart</p>
              <img alt="cart" src={cart} />
            </div>
          </div>
        </div>
        <BlockFavourite
          onClick={() => {
            this.setState({ inFavourite: !this.state.inFavourite }, () => {
              if (this.state.inFavourite) {
                setInfavourite(this.state.product);
              } else {
                deleteInfavourite(this.state.product);
              }
            });
          }}
          active={this.state.inFavourite}
          className={styles.productCard_favourite}
        >
          <img src={star} alt="star" />
        </BlockFavourite>
        <div className={styles.productCard_categories}>
          {hotprice ? (
            <div className={styles.productCard_categories_percent}>
              <span>–12%</span>
            </div>
          ) : null}
          {buyerslike ? (
            <div className={styles.productCard_categories_hot}>
              <span>Buyers Like!</span>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
