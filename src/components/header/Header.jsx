import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import InfromationBlock from "./InformationBlock";
import NavLink from "./NavLink";
import BlockWithMenu from "./BlockWithMenu";
import "./scss/Header.scss";
const WrapperInformationContainerDiv = styled.div`
  display: flex;
  width: 100%;
  box-shadow: ${(props) =>
    props.border ? "inset 0 -1px 0 0 #d9d9d9" : "none"};
  background: ${(props) => (props.bg ? props.bg : "none")};
`;

export default () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    //block of header-animation effect
    const header = ref.current;
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <header>
      <WrapperInformationContainerDiv border>
        <NavLink
          linkes={[
            { title: "About", to: "/about" },
            { title: "Warranty & Returns", to: "/warranty" },
            { title: "Payment", to: "/payment" },
            { title: "Delivery", to: "/delivery" },
            { title: "FAQ", to: "/faq" },
          ]}
        />
      </WrapperInformationContainerDiv>
      <WrapperInformationContainerDiv>
        <InfromationBlock
          phones={[
            { phone: "+1(061) 701 10 03" },
            { phone: "+1(095) 232 36 13" },
            { phone: "+1(095) 232 36 13" },
          ]}
        />
      </WrapperInformationContainerDiv>
      <WrapperInformationContainerDiv
        className={`sticky-wrapper${isSticky ? " sticky" : ""}`}
        ref={ref}
        bg="#35889a"
      >
        <BlockWithMenu />
      </WrapperInformationContainerDiv>
    </header>
  );
};
