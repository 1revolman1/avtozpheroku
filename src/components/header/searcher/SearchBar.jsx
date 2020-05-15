import React, { Component } from "react";
import styled from "styled-components";
import mangnifire from "./search.svg";
const SearchBarDiv = styled.div`
  position: relative;
  width: ${(props) => (props.wg ? props.wg : "auto")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  flex: ${(props) => (props.fl ? props.fl : "none")};
  & > img {
    position: absolute;
    right: 18px;
    width: 24px;
    height: 24px;
  }
  & > input {
    border: initial;
    border-radius: 3px;
    background-color: #ffffff;
    width: 100%;
    padding: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 35px;
    font-family: "Rubik", sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #9b9b9b;
    &::placeholder {
      font-family: "Rubik", sans-serif;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #9b9b9b;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: initial;
  }
`;

export default class SearchBar extends Component {
  render() {
    const { wg } = this.props;
    return (
      <SearchBarDiv wg={wg}>
        <input
          type="text"
          placeholder="Search by name, product code, catalog number, car make"
        />
        <img src={mangnifire} alt="" />
      </SearchBarDiv>
    );
  }
}
