import React from "react";
import { connect } from "react-redux";
import Products from "../components/blockproducts/Products";
import { getGoods } from "../actions/BlockComponentActions";

class ProductsContainer extends React.Component {
  render() {
    const { goods, getGoods } = this.props;
    return (
      <Products
        products={goods.products}
        isFetching={goods.isFetching}
        getGoods={getGoods}
      />
    );
  }
}
const mapStateToProps = (store) => {
  return {
    goods: store.goods,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getGoods: () => dispatch(getGoods()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
