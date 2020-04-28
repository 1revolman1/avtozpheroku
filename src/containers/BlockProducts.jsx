import React from "react";
import { connect } from "react-redux";
import Products from "../components/blockproducts/Products";
import { getGoods } from "../actions/BlockComponentActions";

class ProductsContainer extends React.Component {
  render() {
    const { goods, getGoods, view } = this.props;
    return (
      <Products
        view={view}
        products={goods.goodsStore}
        isFetching={goods.isFetching}
        pageToShow={goods.pageToShow}
        getGoods={getGoods}
      />
    );
  }
}
const mapStateToProps = (store) => {
  return {
    goods: store.goods,
    view: store.view.view,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getGoods: () => dispatch(getGoods()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
