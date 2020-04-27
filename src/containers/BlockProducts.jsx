import React from "react";
import { connect } from "react-redux";
import Products from "../components/blockproducts/Products";
import { getGoods, changeProducts } from "../actions/BlockComponentActions";

class ProductsContainer extends React.Component {
  render() {
    const { menu, goods, getGoods, changeProducts, view } = this.props;
    return (
      <Products
        menuSelected={menu}
        view={view}
        products={goods.products}
        isFetching={goods.isFetching}
        pageToShow={goods.pageToShow}
        // goodsStore={goods.goodsStore}
        getGoods={getGoods}
        // changeProducts={changeProducts}
      />
    );
  }
}
const mapStateToProps = (store) => {
  return {
    goods: store.goods,
    view: store.view.view,
    menu: store.menu.selectedOption,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getGoods: () => dispatch(getGoods()),
    changeProducts: (products) => dispatch(changeProducts(products)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
