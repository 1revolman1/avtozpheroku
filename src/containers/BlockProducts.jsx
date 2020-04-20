import React from "react";
import { connect } from "react-redux";
import { Page } from "../components/Page";
import { getGoods } from "../actions/BlockComponentActions";
class PageContainer extends React.Component {
  render() {
    const { goods, getGoods } = this.props;
    return <Page />;
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
export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
