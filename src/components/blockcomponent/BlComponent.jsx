import React, { Component } from "react";
import styles from "./BlComponent.module.scss";
import "./dropdown/index.scss";
// import DropDown from "./dropdown/dropdown";
// import DropDownData from "../../avto1.json";
import { connect } from "react-redux";
import { changeToLine, changeToBlock } from "../../actions/ViewCardAction";
import ProductsContainer from "../../containers/BlockProducts";
import MenueContainer from "../../containers/BlockMenu";

class BlComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedOption: {
  //       Бренд: [],
  //       Вязкость: [],
  //       Тип: [],
  //       Спецификация: [],
  //       Допуск: [],
  //     },
  //   };
  // }
  // handleChange = (selectedOption, withcSelected) => {
  //   this.setState((prevState) => ({
  //     selectedOption: {
  //       ...prevState.selectedOption,
  //       [withcSelected]: selectedOption,
  //     },
  //   }));
  // };

  render() {
    const { view, changeToLine, changeToBlock } = this.props;
    return (
      <div className={styles.productContainer}>
        <div className={styles.productContainer_header}>
          <h1>Масло моторное {view.view} </h1>
          <div className={styles.productContainer_header_settings}>
            <div className={styles.productContainer_header_settings_info}>
              <p>Найдено 652 товара в категории</p>
            </div>
            <div className={styles.productContainer_header_settings_setting}>
              <select
                className={styles.productContainer_header_settings_setting_menu}
              >
                <option value="default">По умолчанию</option>
                <option value="popular">Самые популярные</option>
                <option value="priceSm">Сортировать по цене(убывание)</option>
                <option value="priceBg">
                  Сортировать по цене(возрастание)
                </option>
              </select>
              <div
                className={
                  styles.productContainer_header_settings_setting_view_box
                }
                onClick={() => {
                  console.log("box");
                  this.props.changeToLine();
                }}
              >
                <span></span> <span></span> <span></span> <span></span>
              </div>
              <div
                className={
                  styles.productContainer_header_settings_setting_view_burg
                }
                onClick={() => {
                  console.log("line");
                  this.props.changeToBlock();
                }}
              >
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productContainer_prducts}>
          <MenueContainer />
          {/* <div className={styles.productContainer_prducts_setting}>
            {this.renderDropDown(DropDownData)}
          </div> */}
          <ProductsContainer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    view: store.view,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeToLine: (id) => dispatch(changeToLine("line")),
    changeToBlock: (id) => dispatch(changeToBlock("block")),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BlComponent);
