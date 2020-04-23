import React, { Component } from "react";
import styled from "styled-components";
import styles from "./Products.module.scss";
import Card from "../productcard/Card";

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
  renderCard = (products, index) => {
    //Предотвратить вызов когда нету данных
    if (products[0] !== undefined) {
      const listGoods = products[index].map((data, index) => {
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
    } else {
      return <div>Loading...</div>;
    }
  };
  render() {
    const { products, isFetching, view, pageToShow } = this.props;
    return (
      <ProductsDiv view={view} className={styles.goodsContainer}>
        {!isFetching ? (
          this.renderCard(products, pageToShow - 1)
        ) : (
          <LoadingDiv>Загружаю товар...</LoadingDiv>
        )}
      </ProductsDiv>
    );
  }
}
