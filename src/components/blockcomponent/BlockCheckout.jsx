import React, { Component } from "react";
import styled from "./BlockCheckout.module.scss";
import ProductsCheckout from "../../containers/ProductsCheckout";
export default class BlockCheckout extends Component {
  render() {
    return (
      <div className={styled.blockCheckout}>
        <h1>Корзина товаров</h1>
        <ProductsCheckout />
      </div>
    );
  }
}
