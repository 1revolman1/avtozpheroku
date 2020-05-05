import React from "react";
import { connect } from "react-redux";
// import Select from "../components/blockcomponent/selectoption/selectoption";
import { setInfavourite, deleteInfavourite } from "../actions/CartAction";
class FavouriteBlock extends React.Component {
  render() {
    const { cart, setInfavourite, deleteInfavourite } = this.props;
    return (
      <h1>Cart</h1>
      //   <Select products={goods.goodsStore} changeProducts={changeProducts} />
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
    deleteInfavourite: (product) => dispatch(deleteInfavourite(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FavouriteBlock);
