import React, { Component } from "react";
import styled from "styled-components";
import "./dropdown.css";
import styles from "./Dropdown.module.scss";
import arrow from "./arrow.svg";
const DropDownDiv = styled.div`
  @media screen and (min-width: 768px) {
    width: ${(props) => (props.wg ? props.wg : "auto")};
  }
`;
const ImageArrowIconImg = styled.div`
  transform: ${(props) =>
    props.bottom === true ? "rotate(-180deg)" : "initial"};
`;
const DropDownUl = styled.ul`
  position: ${(props) => (props.abs ? "absolute" : "initial")};
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
    const { list, wg, abs } = this.props;
    const { listOpen, headerTitle } = this.state;
    return (
      <DropDownDiv className={styles.dropdownDiv} wg={wg}>
        <div onClick={() => this.toggleList()}>
          <div className={styles.dropdownDiv_category}>
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
            <ImageArrowIconImg
              className={styles.dropdownDiv_category_imgArrow}
              bottom={listOpen ? true : false}
            >
              <img src={arrow} alt="" />
            </ImageArrowIconImg>
          </div>
        </div>
        {listOpen && (
          <DropDownUl
            abs={abs ? true : false}
            className={styles.dropdownDiv_up}
          >
            {list.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </DropDownUl>
        )}
      </DropDownDiv>
    );
  }
}
