import React, { Component } from "react";
import styles from "./BlComponent.module.scss";
import "./dropdown/index.scss";
import DropDown from "./dropdown/dropdown";
import DropDownData from "../../avto1.json";
import Card from "../productcard/Card";
export default class BlComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: {
        Бренд: [],
        Вязкость: [],
        Тип: [],
        Спецификация: [],
        Допуск: [],
      },
    };
  }
  handleChange = (selectedOption, withcSelected) => {
    this.setState((prevState) => ({
      selectedOption: {
        ...prevState.selectedOption,
        [withcSelected]: selectedOption,
      },
    }));
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
    return (
      <div className={styles.productContainer}>
        <div className={styles.productContainer_header}>
          <h1>Масло моторное</h1>
          <div className={styles.productContainer_header_settings}>
            <div className={styles.productContainer_header_settings_info}>
              <p>Найдено 652 товара в категории</p>
            </div>
            <div className={styles.productContainer_header_settings_setting}>
              <select
                className={styles.productContainer_header_settings_setting_menu}
              >
                <option value="default">По умолчанию</option>
                <option value="popular">Самые популярные</option>
                <option value="priceSm">Сортировать по цене(убывание)</option>
                <option value="priceBg">
                  Сортировать по цене(возрастание)
                </option>
              </select>
              <div
                className={styles.productContainer_header_settings_setting_view}
              ></div>
              <div
                className={styles.productContainer_header_settings_setting_view}
              ></div>
            </div>
          </div>
        </div>
        <div className={styles.productContainer_prducts}>
          <div className={styles.productContainer_prducts_setting}>
            {this.renderDropDown(DropDownData)}
          </div>
          <div className={styles.productContainer_prducts_goods}>
            <Card /> <Card /> <Card /> <Card />
          </div>
        </div>
      </div>
    );
  }
}
