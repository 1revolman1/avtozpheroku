import React from "react";
import { connect } from "react-redux";

import BlockBuy from "../components/blockproducts/BlockBuy";

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
export default connect(mapStateToProps)(BlockAllBuy);
