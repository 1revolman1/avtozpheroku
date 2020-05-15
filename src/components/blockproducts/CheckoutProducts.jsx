import React, { Component } from "react";
import styled from "styled-components";
import CheckoutCard from "../productcard/CheckoutCard";

const LoadingDiv = styled.div`
  margin: 0 auto;
`;

export default class CheckoutProducts extends Component {
  renderCard = (products) => {
    const listGoods = products.map((data, index) => {
      return (
        <CheckoutCard
          product={data}
          key={index}
          changeInbuy={this.props.changeInbuy}
          deleteInbuy={this.props.deleteInbuy}
        />
      );
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
          <LoadingDiv>You have not selected products!</LoadingDiv>
        )}
        <div></div>
      </React.Fragment>
    );
  }
}
