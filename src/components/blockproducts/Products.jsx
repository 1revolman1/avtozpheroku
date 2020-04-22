import React, { Component } from "react";
import styled from "styled-components";
import styles from "./Products.module.scss";
import Card from "../productcard/Card";

export default class Products extends Component {
  render() {
    return (
      <div className={styles.goodsContainer}>
        <Card /> <Card /> <Card /> <Card />
      </div>
    );
  }
}
