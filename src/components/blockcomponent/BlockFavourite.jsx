import React, { Component } from "react";
import styled from "./BlockFavourite.module.scss";
import ProductsFavourite from "../../containers/ProductsFavourite";
export default class BlockFavourite extends Component {
  render() {
    return (
      <div className={styled.blockFavourite}>
        <ProductsFavourite />
      </div>
    );
  }
}
