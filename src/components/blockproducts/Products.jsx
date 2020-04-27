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
      //Если есть элементы в фильтре
      if (this.props.menuSelected) {
        let menu = this.props.menuSelected;
        let filteredArray = [];
        //Генерация при отмене фильтрации
        if (menu["Бренд"].length > 0) {
          menu["Бренд"].forEach((menuValue) => {
            filteredArray = filteredArray.concat(
              buffer.filter((card) =>
                card.proizvod.includes(menuValue.value.trim())
              )
            );
          });
          buffer = filteredArray;
        }
      }
      let newData = [];
      let length = buffer.length;
      for (let i = 0; i < length; i += 20) {
        newData.push(...[buffer.splice(0, 20)]);
      }
      const listGoods = newData[index].map((data, index) => {
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

    //Предотвратить вызов когда нету данных
    // if (products[0] !== undefined) {
    //   // const listGoods = newData[index].map((data, index) => {
    //   //   return (
    //   //     <Card
    //   //       view={this.props.view}
    //   //       key={index}
    //   //       proizvod={data.proizvod}
    //   //       text={data.text}
    //   //       code={data.code}
    //   //       price={data.price}
    //   //       img={data.img}
    //   //     />
    //   //   );
    //   // });
    //   return listGoods;
    // } else {
    //   return <div>Loading...</div>;
    // }
  };
  render() {
    const {
      // goodsStore,
      // changeProducts,
      products,
      isFetching,
      view,
      pageToShow,
    } = this.props;
    return (
      <React.Fragment>
        <ProductsDiv view={view} className={styles.goodsContainer}>
          {!isFetching ? (
            this.renderCard(products, pageToShow - 1)
          ) : (
            <LoadingDiv>Загружаю товар...</LoadingDiv>
          )}
        </ProductsDiv>
        <div>
          <p>fsdfdsgd</p>
          <button
            onClick={() => {
              console.log("clicked");
              // let result = goodsStore.filter(
              //   (element) => element.proizvod === "KIXX"
              // );
              // let buffer = result.slice();
              // let newData = [];
              // let length = result.length;
              // for (let i = 0; i < length; i += 20) {
              //   newData.push(...[buffer.splice(0, 20)]);
              // }
              // // console.log(result);
              // console.log(newData[0]);
              // changeProducts(newData);
              // this.renderCard(newData);
            }}
          >
            Click
          </button>
        </div>
      </React.Fragment>
    );
  }
}
