import React, { Component } from "react";
import styles from "./BlComponent.module.scss";
import styled from "styled-components";
import "./dropdown/index.scss";
import { connect } from "react-redux";
import { changeToLine, changeToBlock } from "../../actions/ViewCardAction";
import { getGoodsPage } from "../../actions/BlockComponentActions";
import ProductsContainer from "../../containers/BlockProducts";
import MenueContainer from "../../containers/BlockMenu";
import SelectOption from "../../containers/SelectOption";
import { Pagination } from "@material-ui/lab";
import Scroll from "react-scroll";

const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  .MuiPagination-ul {
    margin: 0;
    & li {
      &:first-of-type,
      &:last-of-type {
        box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.2);
        background-color: #ffffff;
        border-radius: 50%;
        border: solid 1px #f9f9f9;
      }
      & .Mui-selected {
        background-color: #58a94b;
        color: white;
      }
      & button {
        font-size: 18px;
        font-weight: 700;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #000000;
      }
    }
  }
`;
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
  handleChange = (event, value) => {
    this.props.getGoodsPage(value);
    Scroll.animateScroll.scrollToTop();
  };
  render() {
    const { view, goods } = this.props;
    return (
      <div className={styles.productContainer}>
        <div className={styles.productContainer_header}>
          <h1>Масло моторное </h1>
          <div className={styles.productContainer_header_settings}>
            <div className={styles.productContainer_header_settings_info}>
              <p>Найдено {goods.goodsStore.length} товара в категории</p>
            </div>
            <div className={styles.productContainer_header_settings_setting}>
              <SelectOption />
              {/* <select
                className={styles.productContainer_header_settings_setting_menu}
              >
                <option value="default">По умолчанию</option>
                <option value="popular">Самые популярные</option>
                <option value="priceSm">Сортировать по цене(убывание)</option>
                <option value="priceBg">
                  Сортировать по цене(возрастание)
                </option>
              </select> */}
              <StyledButtonViewBlock
                className={
                  styles.productContainer_header_settings_setting_view_box
                }
                view={view.view}
                onClick={() => {
                  if (this.props.view.view !== "block")
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
                  if (this.props.view.view !== "line")
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
        <StyledPagination
          size="large"
          count={Math.ceil(goods.goodsStore.length / 20)}
          page={goods.pageToShow}
          onChange={this.handleChange}
        />
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
    getGoodsPage: (page) => dispatch(getGoodsPage(page)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BlComponent);
