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
      // let buffer = products;
      let buffer = products.slice();
      //Если есть элементы в фильтре
      if (this.props.menuSelected) {
        let menu = this.props.menuSelected;
        buffer = Object.keys(menu).reduce(function (
          changedArray,
          currentCategory,
          index,
          menuCategories
        ) {
          let associating = {
            Бренд: "proizvod",
            Вязкость: "text",
          };
          if (
            Object.values(menu)[index] &&
            Object.values(menu)[index].length > 0
          ) {
            let bufferedArray = [];
            let filterSubject = Object.values(menu)[index];
            console.log(filterSubject);
            filterSubject.forEach((menuValue) => {
              bufferedArray = bufferedArray.concat(
                changedArray.filter((card) =>
                  card[associating[Object.keys(menu)[index]]].includes(
                    menuValue.value.trim()
                  )
                )
              );
              if (bufferedArray.length === 0) {
                bufferedArray = [{ text: "none" }];
              }
            });
            return bufferedArray;
          } else {
            return changedArray;
          }
        },
        buffer);
      }
      console.log("Buffer after menu ", buffer);
      // if (this.props.menuSelected) {
      //   let menu = this.props.menuSelected;
      //   let filteredArray = [];
      //   let savedValue = [];
      //   //Генерация при отмене фильтрации Вязкость
      //   if (menu["Бренд"] && menu["Бренд"].length > 0) {
      //     menu["Бренд"].forEach((menuValue) => {
      //       savedValue = savedValue.concat(
      //         buffer.filter((card) =>
      //           card.proizvod.includes(menuValue.value.trim())
      //         )
      //       );
      //     });
      //     if (menu["Вязкость"] && menu["Вязкость"].length > 0) {
      //       menu["Вязкость"].forEach((menuValue) => {
      //         let arr = savedValue.filter(
      //           (card) =>
      //             card.text
      //               .split(" ")
      //               .filter((text) => text === menuValue.value.trim())[0]
      //         );
      //         console.log(arr);
      //         savedValue = arr;
      //       });
      //       // if (savedValue.length === 0) {
      //       //   savedValue = [{ text: "none" }];
      //       // }
      //     }
      //     if (savedValue.length === 0) {
      //       savedValue = [{ text: "none" }];
      //     }
      //     filteredArray = savedValue;
      //   }
      //   buffer = filteredArray;
      // }
      let newData = [];
      let length = buffer.length;
      for (let i = 0; i < length; i += 20) {
        newData.push(...[buffer.splice(0, 20)]);
      }
      console.log("NewData ", newData);
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
    const {
      // goodsStore,
      // changeProducts,
      products,
      isFetching,
      view,
      pageToShow,
      // sendProductAmmount,
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
        {/* <div>
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
        </div> */}
      </React.Fragment>
    );
  }
}
