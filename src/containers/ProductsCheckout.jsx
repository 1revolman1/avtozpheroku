import React from "react";
import { connect } from "react-redux";

import CheckoutProducts from "../components/blockproducts/CheckoutProducts";
import {
  changeInbuy,
  deleteInbuy,
  setInfavouriteInit,
} from "../actions/CartAction";

class ProductsCheckout extends React.Component {
  componentDidMount = () => {
    this.props.setInfavouriteInit("favourite");
  };
  render() {
    const { cart, changeInbuy, deleteInbuy } = this.props;
    return (
      <CheckoutProducts
        whantToBuy={cart.whantToBuy}
        changeInbuy={changeInbuy}
        deleteInbuy={deleteInbuy}
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
    changeInbuy: (product, ammount) => dispatch(changeInbuy(product, ammount)),
    deleteInbuy: (product) => dispatch(deleteInbuy(product)),
    setInfavouriteInit: (product) => dispatch(setInfavouriteInit(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsCheckout);
