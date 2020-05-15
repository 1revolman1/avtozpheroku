import React, { Component } from "react";
import styles from "../BlComponent.module.scss";

export default class extends Component {
  fromMinToMax = (a, b) => {
    return Number(a.price.split(" ")[0]) - Number(b.price.split(" ")[0]);
  };
  fromMaxToMin = (a, b) => {
    return Number(b.price.split(" ")[0]) - Number(a.price.split(" ")[0]);
  };
  fromTrueToFalse = (a, b, object) => {
    return b[object] - a[object];
  };
  handleChange = (e) => {
    let event = e.target.value;
    let products = this.props.products.slice();
    switch (event) {
      case "priceSm":
        products.sort(this.fromMaxToMin);
        break;
      case "priceBg":
        products.sort(this.fromMinToMax);
        break;
      case "popular":
        products.sort(function fromTrueToFalse(a, b) {
          return b.buyerslike - a.buyerslike;
        });
        break;
      case "default":
        products.sort(function (a, b) {
          if (a.proizvod > b.proizvod) {
            return 1;
          }
          if (a.proizvod < b.proizvod) {
            return -1;
          }
          return 0;
        });
        break;
      case "sales":
        products.sort(function fromTrueToFalse(a, b) {
          return b.hotprice - a.hotprice;
        });
        break;
      default:
        break;
    }
    this.props.changeProducts(products);
  };
  render() {
    return (
      <select
        onChange={this.handleChange}
        className={styles.productContainer_header_settings_setting_menu}
      >
        <option value="default">Default</option>
        <option value="popular">Popular</option>
        <option value="sales">Best sale!</option>
        <option value="priceSm">Sort by price (decrease)</option>
        <option value="priceBg">Sort by price (increase)</option>
      </select>
    );
  }
}
