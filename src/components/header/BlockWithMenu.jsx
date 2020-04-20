import React, { Component } from "react";
import styled from "styled-components";
import Dropdown from "./dropdown/Dropdown";
import SearchBar from "./searcher/SearchBar";
import star from "./star.svg";
import cart from "./supermarket.svg";

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
  width: ${(props) => (props.wg ? props.wg : "auto")};
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: initial;
    padding: 10px 0;
    justify-content: center;
  }
`;
const StyledButtonDiv = styled.div`
  display: flex;
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
`;
export default class BlockWithMenu extends Component {
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
    return (
      <WrapperBlockDiv wg="80%">
        <Dropdown
          abs
          wg="40%"
          title="Каталог товаров"
          list={this.state.location}
        />
        <SearchBar wg="50%" />
        <StyledButtonsDiv wg="25%">
          <StyledButtonDiv>
            <img src={star} />
            <p>Избранное</p>
          </StyledButtonDiv>
          <StyledButtonDiv>
            <img src={cart} />
            <p>Корзина</p>
          </StyledButtonDiv>
        </StyledButtonsDiv>
      </WrapperBlockDiv>
    );
  }
}
