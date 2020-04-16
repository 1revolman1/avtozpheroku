import React, { Component } from "react";
import styled from "styled-components";
import "./dropdown.css";
import arrow from "./arrow.svg";
// blog.logrocket.com/building-a-custom-dropdown-menu-component-for-react-e94f02ced4a1/
const DropDownDiv = styled.div`
  position: relative;
  max-width: 272px;
  width: ${(props) => (props.wg ? props.wg : "auto")};
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: initial;
  }
`;
const GoodsCatalogDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 12px 5px;
  background-color: #478c3c;
  & > div {
    display: flex;
    flex-wrap: wrap;
    & > p {
      user-select: none;
      font-family: "Rubik", sans-serif;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 1px;
      color: #ffffff;
    }
  }
`;
const DropDownListUl = styled.ul`
  position: absolute;
  width: 100%;
  & > li {
    border: solid;
    padding: 12px 10px;
    border-top: 1px;
    border-bottom: 1px;
    user-select: none;
    list-style-type: none;
    background: white;
    &:hover {
      background: #dedede57;
    }
    &:last-child {
      border: solid;
      border-top: 1px;
    }
  }
`;
const ImageArrowIconImg = styled.div`
  width: 20px;
  height: 20px;
  transition: transform 0.35s linear;
  transform: ${(props) =>
    props.bottom === true ? "rotate(-180deg)" : "initial"};
  & > img {
    user-select: none;
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;
export default class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title,
    };
  }
  handleClickOutside() {
    this.setState({
      listOpen: false,
    });
  }
  toggleList() {
    this.setState((prevState) => ({
      listOpen: !prevState.listOpen,
    }));
  }

  render() {
    const { list, wg, title } = this.props;
    const { listOpen, headerTitle } = this.state;
    return (
      <DropDownDiv wg={wg}>
        <div onClick={() => this.toggleList()}>
          <GoodsCatalogDiv>
            <div
              className={`hamburger hamburger--spring ${
                listOpen ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
            <div>
              <p> {headerTitle}</p>
            </div>
            <ImageArrowIconImg bottom={listOpen ? true : false}>
              <img src={arrow} alt="" />
            </ImageArrowIconImg>
          </GoodsCatalogDiv>
        </div>
        {listOpen && (
          <DropDownListUl>
            {list.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </DropDownListUl>
        )}
      </DropDownDiv>
    );
  }
}
