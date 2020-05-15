import React, { Component } from "react";
import styles from "./Menues.module.scss";
import DropDown from "../blockcomponent/dropdown/dropdown";

export default class Menus extends Component {
  componentDidMount = () => {
    if (this.props.menues.length === 0) this.props.getMenues();
  };
  changeGoods = () => {
    let menu = this.props.selectedOption;
    let buffer = this.props.products;
    buffer = Object.keys(menu).reduce(function (
      changedArray,
      currentCategory,
      index,
      menuCategories
    ) {
      let associating = {
        Brend: "proizvod",
        Type: "text",
        Viscosity: "text",
      };
      if (Object.values(menu)[index] && Object.values(menu)[index].length > 0) {
        let bufferedArray = [];
        let filterSubject = Object.values(menu)[index];
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
    this.props.getGoodsPage(1);
    this.props.changeProducts(buffer);
  };
  handleChange = async (selectedOption, withcSelected) => {
    await this.props.setFilter(selectedOption, withcSelected);
    await this.changeGoods();
  };
  renderDropDown = (DropDownData) => {
    const listItems = DropDownData.map((data, index) => {
      let key = Object.keys(data)[0];
      let newData = [];
      let length = DropDownData[index][key].length;
      for (let m = 0; m < length; m += 1) {
        newData.push({ value: DropDownData[index][key][m] });
      }
      return (
        <DropDown
          key={index}
          placeholder={Object.keys(data)[0]}
          options={newData}
          onChange={this.handleChange}
        />
      );
    });
    return listItems;
  };
  render() {
    const { menues, isFetching } = this.props;

    return (
      <div className={styles.menueSetting}>
        {!isFetching ? this.renderDropDown(menues) : <div>Downloading...</div>}
      </div>
    );
  }
}
