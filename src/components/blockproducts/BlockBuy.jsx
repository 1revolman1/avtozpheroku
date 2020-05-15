import React, { Component } from "react";
import styles from "./BlockBuy.module.scss";
export default class BlockBuy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
    };
  }
  renderPrice = (product) => {
    let AllPrice = 0;
    product.forEach((e) => {
      let increment = e.ammount;
      let price = Number(e.product.price.split(" ")[0]);
      AllPrice += increment * price;
    });
    if (AllPrice === 0) return 0;
    return AllPrice.toFixed(2);
  };
  componentDidMount = () => {
    this.setState({ price: this.renderPrice(this.props.whantToBuy) });
  };
  componentDidUpdate = (prevProps) => {
    if (this.state.price !== this.renderPrice(this.props.whantToBuy)) {
      this.setState({ price: this.renderPrice(this.props.whantToBuy) });
    }
  };
  render() {
    return (
      <div className={styles.blockBuy}>
        <h3>In total: {this.state.price} $</h3>
        <button
          onClick={() => {
            if (this.state.price !== 0.0) {
              alert(this.state.price + " $");
            }
          }}
          className={styles.blockBuy_form}
        >
          <span>Checkout</span>
        </button>
      </div>
    );
  }
}
