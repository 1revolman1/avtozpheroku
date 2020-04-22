import React, { Component } from "react";
import styles from "./BlComponent.module.scss";
import styled from "styled-components";
import "./dropdown/index.scss";
import { connect } from "react-redux";
import { changeToLine, changeToBlock } from "../../actions/ViewCardAction";
import ProductsContainer from "../../containers/BlockProducts";
import MenueContainer from "../../containers/BlockMenu";

const StyledButtonViewBlock = styled.div`
  background: ${(props) =>
    props.view === "block" ? "rgba(88, 169, 75, 0.3)" : "#d9d9d9"};
  span {
    border: ${(props) =>
      props.view === "block" ? "solid 2px #58a94b" : "solid 2px #616161"};
  }
`;
const StyledButtonViewLine = styled.div`
  background: ${(props) =>
    props.view === "line" ? "rgba(88, 169, 75, 0.3)" : "#d9d9d9"};
  span,
  span::before,
  span::after {
    background: ${(props) => (props.view === "line" ? " #58a94b" : "#616161")};
  }
`;
class BlComponent extends Component {
  render() {
    const { view, goods } = this.props;
    return (
      <div className={styles.productContainer}>
        <div className={styles.productContainer_header}>
          <h1>Масло моторное </h1>
          <div className={styles.productContainer_header_settings}>
            <div className={styles.productContainer_header_settings_info}>
              <p>Найдено {goods.products.length} товара в категории</p>
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
              <StyledButtonViewBlock
                className={
                  styles.productContainer_header_settings_setting_view_box
                }
                view={view.view}
                onClick={() => {
                  console.log("block");
                  this.props.changeToBlock();
                }}
              >
                <span></span> <span></span> <span></span> <span></span>
              </StyledButtonViewBlock>
              <StyledButtonViewLine
                className={
                  styles.productContainer_header_settings_setting_view_burg
                }
                view={view.view}
                onClick={() => {
                  console.log("line");
                  this.props.changeToLine();
                }}
              >
                <span></span>
              </StyledButtonViewLine>
            </div>
          </div>
        </div>
        <div className={styles.productContainer_prducts}>
          <MenueContainer />
          <ProductsContainer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    view: store.view,
    goods: store.goods,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeToLine: (id) => dispatch(changeToLine("line")),
    changeToBlock: (id) => dispatch(changeToBlock("block")),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BlComponent);
