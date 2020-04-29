import React from "react";
import { connect } from "react-redux";
import Select from "../components/blockcomponent/selectoption/selectoption";
import { changeProducts } from "../actions/BlockComponentActions";
class SelectOption extends React.Component {
  render() {
    const { goods, changeProducts } = this.props;
    return (
      <Select products={goods.goodsStore} changeProducts={changeProducts} />
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
    changeProducts: (products) => dispatch(changeProducts(products)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectOption);
