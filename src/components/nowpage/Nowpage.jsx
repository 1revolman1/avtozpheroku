import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./style.scss";
const StuledUl = styled.ul`
  display: flex;
  & > li {
    margin: 0 12px;
    color: #58a94b;
    & > a {
      font-family: "Rubik", sans-serif;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #58a94b;
      text-decoration: underline;
    }
    &:first-child {
      list-style-type: none;
    }
    &:last-child {
      & > a {
        color: black;
        text-decoration: none;
      }
    }
  }
`;

export default class NowPage extends Component {
  render() {
    const { pageadress } = this.props;
    // console.log(pageadress);
    return (
      <nav className="nav-container">
        <div className="nav-container__wrapper">
          <StuledUl>
            {pageadress.map((address, index) => (
              <li key={index}>
                <Link to={address.top}>{address.title}</Link>
              </li>
            ))}
          </StuledUl>
        </div>
      </nav>
    );
  }
}
