import React, { Component } from "react";
import styled from "styled-components";
import styles from "./Products.module.scss";
import CheckoutCard from "../productcard/CheckoutCard";

const ProductsDiv = styled.div`
  flex-direction: ${(props) => (props.view === "line" ? "column" : "row")};
  width: ${(props) => (props.showFilter ? "80%" : "100%")};
`;
const LoadingDiv = styled.div`
  margin: 0 auto;
`;

export default class CheckoutProducts extends Component {
  renderCard = (products) => {
    const listGoods = products.map((data, index) => {
      return <CheckoutCard product={data} key={index} />;
    });
    return listGoods;
  };
  render() {
    const { whantToBuy } = this.props;
    return (
      <React.Fragment>
        {whantToBuy.length > 0 ? (
          this.renderCard(whantToBuy)
        ) : (
          <LoadingDiv>Вы не выбрали товары!</LoadingDiv>
        )}
      </React.Fragment>
    );
  }
}
