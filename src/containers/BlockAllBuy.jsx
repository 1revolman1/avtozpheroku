import React from "react";
import { connect } from "react-redux";

import BlockBuy from "../components/blockproducts/BlockBuy";
import {
  //   setInfavourite,
  deleteInfavourite,
  //   setInbuy,
} from "../actions/CartAction";

class BlockAllBuy extends React.Component {
  render() {
    const { cart } = this.props;
    return <BlockBuy whantToBuy={cart.whantToBuy} />;
  }
}
const mapStateToProps = (store) => {
  return {
    cart: store.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // setInfavourite: (product) => dispatch(setInfavourite(product)),
    // setInbuy: (product, ammount) => dispatch(setInbuy(product, ammount)),
    deleteInfavourite: (product) => dispatch(deleteInfavourite(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BlockAllBuy);
