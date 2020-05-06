import React from "react";
// import styled from "styled-components";
import styles from "./CheckoutCard.module.scss";
import cartStyle from "./counter/Counter.module.scss";
import { connect } from "react-redux";
import {
  setInfavourite,
  deleteInfavourite,
  setInbuy,
} from "../../actions/CartAction";

import { LazyLoadImage } from "react-lazy-load-image-component";

class CheckoutCard extends React.PureComponent {
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
    this.setState({
      product: this.props.product.product,
      count: this.props.product.ammount,
    });
  };
  render() {
    const {
      proizvod,
      text,
      price,
      img,
      hotprice,
      buyerslike,
    } = this.props.product.product;
    // const{
    //   setInfavourite,
    //   deleteInfavourite,
    //   setInbuy,
    // } = this.props;
    const { product } = this.props;
    console.log(product);
    return (
      <div className={styles.productCard}>
        <div className={styles.productCard_imagebl}>
          <LazyLoadImage alt="oil" src={img} />
        </div>
        <div className={styles.productCard_block}>
          <div className={styles.productCard_block_textContent}>
            <h4>{proizvod}</h4>
            <h2>{text}</h2>
          </div>
          <div className={styles.productCard_block_priceList}>
            <div
              className={
                styles.productCard_block_priceList_withSelector_buttons
              }
            >
              <p>{price}</p>
              <div
                className={
                  styles.productCard_block_priceList_withSelector_buttons
                }
              >
                <div className={cartStyle.cardCounter}>
                  <span>{this.state.count}</span>
                  <div className={cartStyle.cardCounter_button}>
                    <button
                      pos="inc"
                      onClick={() =>
                        this.setState({ count: this.state.count + 1 })
                      }
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
              </div>
            </div>
            <div className={styles.productCard_block_priceList_witoutSelector}>
              <p>{Number(price.split(" ")[0]) * this.state.count} грн.</p>
            </div>
          </div>
        </div>
        <div className={styles.productCard_categories}>
          {hotprice ? (
            <div className={styles.productCard_categories_percent}>
              <span>–12%</span>
            </div>
          ) : null}
          {buyerslike ? (
            <div className={styles.productCard_categories_hot}>
              <span>Хит продаж</span>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    cart: store.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setInfavourite: (product) => dispatch(setInfavourite(product)),
    setInbuy: (product, ammount) => dispatch(setInbuy(product, ammount)),
    deleteInfavourite: (product) => dispatch(deleteInfavourite(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutCard);
