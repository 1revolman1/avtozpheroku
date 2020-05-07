import React, { Component } from "react";
import styled from "styled-components";
import FavouriteCard from "../productcard/FavouriteCard";

const LoadingDiv = styled.div`
  margin: 0 auto;
`;

export default class FavouriteProducts extends Component {
  renderCard = (products) => {
    const listGoods = products.map((data, index) => {
      return (
        <FavouriteCard
          product={data}
          key={index}
          setInbuy={this.props.setInbuy}
          deleteInfavourite={this.props.deleteInfavourite}
        />
      );
    });
    return listGoods;
  };

  render() {
    const { favourite } = this.props;
    return (
      <React.Fragment>
        {favourite.length > 0 ? (
          this.renderCard(favourite)
        ) : (
          <LoadingDiv>Вы не выбрали товары!</LoadingDiv>
        )}
      </React.Fragment>
    );
  }
}
