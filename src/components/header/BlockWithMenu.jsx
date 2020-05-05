import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import styled from "styled-components";
import Dropdown from "./dropdown/Dropdown";
import SearchBar from "./searcher/SearchBar";
import star from "./star.svg";
import cart from "../../assets/supermarket.svg";

const WrapperBlockDiv = styled.div`
  display: flex;
  max-width: 1440px;
  width: ${(props) => (props.wg ? props.wg : "none")};
  padding: ${(props) => (props.pg ? props.pg : "none")};
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const StyledButtonsDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
  width: ${(props) => (props.wg ? props.wg : "auto")};
  @media screen and (max-width: 1250px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: initial;
    padding: 10px 0;
    justify-content: center;
  }
`;
const StyledButtonDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  & > img {
    width: 20px;
    height: auto;
    object-fit: cover;
  }
  & > p {
    padding: 0 8px;
    text-transform: uppercase;
    font-family: "Rubik", sans-serif;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1px;
    color: #ffffff;
  }
  & > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
const StyledSpan = styled.span`
  display: ${(props) => (props.show ? "block" : "none")};
  font-family: "Rubik", sans-serif;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: #ffffff;
  position: absolute;
  top: 10%;
  left: -5px;
  padding: 1px;
  background: #58a94b;
  /* background: rgba(88, 169, 75, 0.3); */
  border-radius: 50%;
  @media screen and (max-width: 1280px) {
    top: -5px;
    left: -5px;
  }
`;

class BlockWithMenu extends Component {
  constructor() {
    super();
    this.state = {
      location: [
        {
          id: 0,
          title: "New York",
          selected: false,
        },
        {
          id: 1,
          title: "Dublin",
          selected: false,
        },
        {
          id: 2,
          title: "California",
          selected: false,
        },
        {
          id: 3,
          title: "Istanbul",
          selected: false,
        },
        {
          id: 4,
          title: "Izmir",
          selected: false,
        },
        {
          id: 5,
          title: "Oslo",
          selected: false,
        },
      ],
    };
  }
  render() {
    const { favourite, whantToBuy } = this.props.cart;
    return (
      <WrapperBlockDiv wg="80%">
        <Dropdown
          abs
          wg="40%"
          title="Каталог товаров"
          list={this.state.location}
        />
        <SearchBar wg="52%" />
        <StyledButtonsDiv wg="25%">
          <StyledButtonDiv>
            <Link to="/favourite"></Link>
            <img src={star} alt="start infavvourite" />
            <p>Избранное</p>
            <StyledSpan show={favourite.length > 0 ? true : false}>
              {favourite.length}
            </StyledSpan>
          </StyledButtonDiv>
          <StyledButtonDiv>
            <Link to="/bought"></Link>
            <img src={cart} alt="shopcart" />
            <p>Корзина</p>
            <StyledSpan show={whantToBuy.length > 0 ? true : false}>
              {whantToBuy.length}
            </StyledSpan>
          </StyledButtonDiv>
        </StyledButtonsDiv>
      </WrapperBlockDiv>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    cart: store.cart,
  };
};
export default connect(mapStateToProps)(BlockWithMenu);
