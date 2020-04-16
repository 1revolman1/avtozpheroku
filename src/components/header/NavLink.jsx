import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLinkBlock = styled.ul`
  margin: 0 auto;
  width: 40%;
  max-width: 576px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 1200px) {
    width: 70%;
  }
`;

const StyledLi = styled.li`
  padding: 11px 0;
`;
const StyledLink = styled(Link)`
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`;

export default class NavLink extends Component {
  render() {
    const { linkes } = this.props;
    return (
      <NavLinkBlock>
        {linkes.map((link, index) => (
          <StyledLi key={index}>
            <StyledLink to={link.to}>{link.title}</StyledLink>
          </StyledLi>
        ))}
      </NavLinkBlock>
    );
  }
}
