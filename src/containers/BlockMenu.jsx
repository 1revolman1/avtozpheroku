import React from "react";
import { connect } from "react-redux";
import Menus from "../components/blockmenu/Menus";
import { getMenues, setFilter } from "../actions/MenueComponentActions";

class MenueContainer extends React.Component {
  render() {
    const { menu, getMenues, setFilter } = this.props;
    return (
      <Menus
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getMenues: () => dispatch(getMenues()),
    setFilter: () => dispatch(setFilter()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MenueContainer);
