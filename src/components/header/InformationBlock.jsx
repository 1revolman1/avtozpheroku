import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/header/logoH.svg";
import userlogo from "../../assets/header/user.svg";
import phonelogo from "../../assets/header/communications.svg";
const WrapperInformationContainerDiv = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  box-shadow: ${(props) =>
    props.border ? "inset 0 -1px 0 0 #d9d9d9" : "none"};
  background: ${(props) => (props.bg ? props.bg : "none")};
`;
const WrapperBlockDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${(props) => (props.wg ? props.wg : "none")};
  padding: ${(props) => (props.pg ? props.pg : "none")};
  margin: 0 auto;
`;
const BlockAtMainHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: ${(props) => (props.fl ? props.fl : "none")};
  justify-content: ${(props) => (props.jc ? props.jc : "none")};
  padding: ${(props) => (props.pd ? props.pd : "none")};
  @media screen and (max-width: 1200px) {
    flex: none;
    width: 100%;
    margin: 15px 0;
  }
`;
const StyledImg = styled.img`
  width: 250px;
  height: auto;
  object-fit: cover;
`;
const StyleInformationUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > li {
    margin: 1px 5px;
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }
`;
const StyleInfromationBlock = styled.div`
  position: relative;
  &::after {
    position: absolute;
    top: 0%;
    left: -35px;
    width: 33px;
    height: 33px;
    transform: translate(-35%, 23%);
    content: "";
    background-image: url(${phonelogo});
  }
  & > p {
    margin: 2px 0;
    font-family: "Rubik", sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #9b9b9b;
  }
  & > a {
    display: inline-block;
    text-transform: uppercase;
    margin: 16px 0 0;
    font-family: "Rubik", sans-serif;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1px;
    color: #35889a;
    border-bottom: 1px dashed #35889a;
  }
`;
const StyledLinkAuth = styled(Link)`
  position: relative;
  font-family: "Rubik", sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  text-align: right;
  color: #35889a;
  border-bottom: 1px dashed #35889a;
  &::after {
    position: absolute;
    top: 0;
    left: -15%;
    width: 20px;
    height: 20px;
    content: "";
    background-image: url(${userlogo});
  }
`;
const StyledLinkLogo = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const StyledLogo = styled(Link)`
  position: relative;
`;
export default class InformationBlock extends Component {
  render() {
    const { phones } = this.props;
    return (
      <WrapperInformationContainerDiv>
        <WrapperBlockDiv wg="80%" pg="18px 0">
          <BlockAtMainHeader fl="1">
            <StyledLogo>
              <StyledLinkLogo to="/"></StyledLinkLogo>
              <StyledImg src={logo} alt="logo"></StyledImg>
            </StyledLogo>
          </BlockAtMainHeader>
          <BlockAtMainHeader fl="2" pd="0 0 0 45px">
            <StyleInfromationBlock>
              <p>
                on weekdays from 08:00 - 19:00, on Saturday and Sunday from
                09:00 - 16:00
              </p>
              <StyleInformationUl>
                {phones.map((phone, index) => (
                  <li key={index}>
                    <a href={`tel:+38${phone.phone.replace(/\s+/g, "")}`}>
                      {phone.phone}
                    </a>
                  </li>
                ))}
              </StyleInformationUl>
              <a href="tel:+1234567890">call me back</a>
            </StyleInfromationBlock>
          </BlockAtMainHeader>
          <BlockAtMainHeader fl="1" jc="flex-end" pd="0 0 0 25px">
            <StyledLinkAuth to="/auth">Login / Registration</StyledLinkAuth>
          </BlockAtMainHeader>
        </WrapperBlockDiv>
      </WrapperInformationContainerDiv>
    );
  }
}
