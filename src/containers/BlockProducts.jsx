import React from "react";
import { connect } from "react-redux";

import Products from "../components/blockproducts/Products";
import { getGoods } from "../actions/BlockComponentActions";
import {
  setInfavouriteInit,
  setInfavourite,
  deleteInfavourite,
  setInbuy,
} from "../actions/CartAction";
class ProductsContainer extends React.Component {
  componentDidMount = () => {
    if (!JSON.parse(localStorage.getItem("favourite"))) {
      localStorage.setItem("favourite", JSON.stringify([]));
    }
    this.props.setInfavouriteInit("favourite");
  };
  render() {
    const {
      goods,
      getGoods,
      view,
      setInfavourite,
      deleteInfavourite,
      setInbuy,
    } = this.props;
    return (
      <Products
        view={view}
        products={goods.goodsStore}
        isFetching={goods.isFetching}
        pageToShow={goods.pageToShow}
        getGoods={getGoods}
        setInfavourite={setInfavourite}
        deleteInfavourite={deleteInfavourite}
        setInbuy={setInbuy}
      />
    );
  }
}
const mapStateToProps = (store) => {
  return {
    goods: store.goods,
    view: store.view.view,
    cart: store.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getGoods: () => dispatch(getGoods()),
    setInfavourite: (product) => dispatch(setInfavourite(product)),
    setInfavouriteInit: (name) => dispatch(setInfavouriteInit(name)),
    setInbuy: (product, ammount) => dispatch(setInbuy(product, ammount)),
    deleteInfavourite: (product) => dispatch(deleteInfavourite(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
