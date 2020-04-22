import React, { Component } from "react";
import styled from "styled-components";
import styles from "./Products.module.scss";
import Card from "../productcard/Card";
import { Pagination } from "@material-ui/lab";

const ProductsDiv = styled.div`
  flex-direction: ${(props) => (props.view === "line" ? "column" : "row")};
`;
const LoadingDiv = styled.div`
  margin: 0 auto;
`;

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: 1,
    };
  }
  handleChange = (event, value) => {
    this.setState({ pages: value });
  };
  componentDidMount = (e) => {
    this.props.getGoods();
  };
  renderCard = (products) => {
    const listGoods = products.map((data, index) => {
      return (
        <Card
          view={this.props.view}
          key={index}
          proizvod={data.proizvod}
          text={data.text}
          code={data.code}
          price={data.price}
          img={data.img}
        />
      );
    });
    return listGoods;
  };
  render() {
    const { products, isFetching, view } = this.props;
    return (
      <ProductsDiv view={view} className={styles.goodsContainer}>
        <Pagination
          count={10}
          page={this.state.pages}
          onChange={this.handleChange}
        />
        {!isFetching ? (
          this.renderCard(products)
        ) : (
          <LoadingDiv>Загружаю товар...</LoadingDiv>
        )}
      </ProductsDiv>
    );
  }
}
