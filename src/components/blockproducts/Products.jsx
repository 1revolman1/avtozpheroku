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
  renderCard = (products, index = 0) => {
    if (products.length) {
      let buffer = products.slice();
      let newData = [];
      let length = buffer.length;
      for (let i = 0; i < length; i += 20) {
        newData.push(...[buffer.splice(0, 20)]);
      }
      // newData - массив разбитый на группы по 20 элементов
      const listGoods = newData[index].map((data, index) => {
        if (data.text === "none") {
          return <div>Нет товаров в данной категории!</div>;
        } else
          return (
            <Card
              menuSelected={this.props.menuSelected}
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
    }
  };
  render() {
    const { products, isFetching, view, pageToShow } = this.props;
    return (
      <React.Fragment>
        <ProductsDiv view={view} className={styles.goodsContainer}>
          {!isFetching ? (
            this.renderCard(products, pageToShow - 1)
          ) : (
            <LoadingDiv>Загружаю товар...</LoadingDiv>
          )}
        </ProductsDiv>
      </React.Fragment>
    );
  }
}
