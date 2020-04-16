import React, { Component } from "react";
import styled from "styled-components";
import InfromationBlock from "./InformationBlock";
import NavLink from "./NavLink";
import BlockWithMenu from "./BlockWithMenu";
const WrapperInformationContainerDiv = styled.div`
  display: flex;
  width: 100%;
  box-shadow: ${(props) =>
    props.border ? "inset 0 -1px 0 0 #d9d9d9" : "none"};
  background: ${(props) => (props.bg ? props.bg : "none")};
`;

export default class Table extends Component {
  render() {
    return (
      <header>
        <WrapperInformationContainerDiv border>
          <NavLink
            linkes={[
              { title: "О компании", to: "/about" },
              { title: "Гарантия и возврат", to: "/garanties" },
              { title: "Оплата", to: "/checkout" },
              { title: "Доставка", to: "/delivery" },
              { title: "Вопросы и ответы", to: "/faq" },
            ]}
          />
        </WrapperInformationContainerDiv>
        <WrapperInformationContainerDiv>
          <InfromationBlock
            phones={[
              { phone: "(061) 701 10 03" },
              { phone: "(095) 232 36 13" },
              { phone: "(095) 232 36 13" },
            ]}
          />
        </WrapperInformationContainerDiv>
        <WrapperInformationContainerDiv bg="#58a94b">
          <BlockWithMenu />
        </WrapperInformationContainerDiv>
      </header>
    );
  }
}
