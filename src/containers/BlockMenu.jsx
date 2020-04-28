import React from "react";
import { connect } from "react-redux";
import Menus from "../components/blockmenu/Menus";
import { getMenues, setFilter } from "../actions/MenueComponentActions";
import { changeProducts, getGoodsPage } from "../actions/BlockComponentActions";
class MenueContainer extends React.Component {
  render() {
    const {
      goods,
      menu,
      getMenues,
      setFilter,
      changeProducts,
      getGoodsPage,
    } = this.props;
    return (
      <Menus
        products={goods.products}
        changeProducts={changeProducts}
        getGoodsPage={getGoodsPage}
        selectedOption={menu.selectedOption}
        menues={menu.menues}
        isFetching={menu.isFetching}
        getMenues={getMenues}
        setFilter={setFilter}
      />
    );
  }
}
const mapStateToProps = (store) => {
  return {
    menu: store.menu,
    goods: store.goods,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getMenues: () => dispatch(getMenues()),
    changeProducts: (products) => dispatch(changeProducts(products)),
    getGoodsPage: (page) => dispatch(getGoodsPage(page)),
    setFilter: (data, name) => dispatch(setFilter(data, name)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MenueContainer);
