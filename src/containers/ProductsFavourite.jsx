import React from "react";
import { connect } from "react-redux";

import FavouriteProducts from "../components/blockproducts/FavouriteProducts";
import { setInbuy, deleteInfavourite } from "../actions/CartAction";

class ProductsFavourite extends React.Component {
  render() {
    const { cart, setInbuy, deleteInfavourite } = this.props;
    return (
      <FavouriteProducts
        favourite={cart.favourite}
        deleteInfavourite={deleteInfavourite}
        setInbuy={setInbuy}
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
    deleteInfavourite: (product) => dispatch(deleteInfavourite(product)),
    setInbuy: (product, ammount) => dispatch(setInbuy(product, ammount)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsFavourite);
