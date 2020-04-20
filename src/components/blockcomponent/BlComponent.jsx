import React, { Component } from "react";
import styles from "./BlComponent.module.scss";
import styled from "styled-components";
import "./dropdown/index.scss";
// import DropDown from "./dropdown/dropdown";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default class BlComponent extends Component {
  constructor(props) {
    super(props);
  }

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
            {/* <Select
              isMulti
              closeMenuOnSelect={false}
              className="react-select-container"
              classNamePrefix="react-select"
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
            /> */}
          </div>
          <div className={styles.productContainer_prducts_goods}></div>
        </div>
      </div>
    );
  }
}
