import React, { Component } from "react";
import styles from "./BlComponent.module.scss";
import "./dropdown/index.scss";
import DropDown from "./dropdown/dropdown";
import DropDownData from "../../avto1.json";

export default class BlComponent extends Component {
  constructor(props) {
    super(props);
  }
  renderDropDown = (DropDownData) => {
    // Convert data to affrodable format
    DropDownData.forEach((e, i) => {
      let key = Object.keys(e)[0];
      let newData = [];
      let length = DropDownData[i][key].length;
      for (let m = 0; m < length; m += 1) {
        newData.push({ value: DropDownData[i][key][m] });
      }
      DropDownData[i][key] = newData;
    });
    const listItems = DropDownData.map((data) => (
      <DropDown
        placeholder={Object.keys(data)[0]}
        options={data[Object.keys(data)[0]]}
      />
    ));
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
            {/* <DropDown
              placeholder={"Text"}
              options={[
                { value: "ocean" },
                { value: "blue" },
                { value: "purple" },
                { value: "red" },
                { value: "orange" },
                { value: "yellow" },
                { value: "green" },
                { value: "forest" },
                { value: "slate" },
                { value: "silver" },
              ]}
            />
            <DropDown
              placeholder={"Block"}
              options={[
                { value: "ocean" },
                { value: "blue" },
                { value: "purple" },
                { value: "red" },
                { value: "orange" },
                { value: "yellow" },
                { value: "green" },
                { value: "forest" },
                { value: "slate" },
                { value: "silver" },
              ]}
            /> */}
          </div>
          <div className={styles.productContainer_prducts_goods}></div>
        </div>
      </div>
    );
  }
}
