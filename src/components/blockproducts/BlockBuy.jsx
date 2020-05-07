import React, { Component } from "react";
import styles from "./BlockBuy.module.scss";
export default class BlockBuy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.renderPrice(this.props.whantToBuy),
    };
  }
  renderPrice = (product) => {
    let AllPrice = 0;
    product.forEach((e) => {
      let increment = e.ammount;
      let price = Number(e.product.price.split(" ")[0]);
      AllPrice += Math.ceil(increment * price);
    });
    return AllPrice;
  };
  componentDidUpdate = (prevProps) => {
    if (this.state.price !== this.renderPrice(this.props.whantToBuy)) {
      this.setState({ price: this.renderPrice(this.props.whantToBuy) });
    }
  };
  render() {
    return (
      <div className={styles.blockBuy}>
        <h3>Итого: {this.state.price} грн.</h3>
        <div
          onClick={() => {
            if (this.state.price !== 0) alert(this.state.price + " грн.");
          }}
          className={styles.blockBuy_form}
        >
          <span>Оформить заказ</span>
        </div>
      </div>
    );
  }
}
