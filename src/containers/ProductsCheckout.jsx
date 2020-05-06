import React from "react";
import { connect } from "react-redux";

import CheckoutProducts from "../components/blockproducts/CheckoutProducts";
import {
  setInfavourite,
  deleteInfavourite,
  setInbuy,
} from "../actions/CartAction";

class ProductsCheckout extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <CheckoutProducts
        whantToBuy={cart.whantToBuy}
        // getGoods={getGoods}
      />
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductsCheckout);
