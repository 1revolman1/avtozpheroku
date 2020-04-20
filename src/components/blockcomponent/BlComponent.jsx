import React, { Component } from "react";
import styles from "./BlComponent.module.scss";
import "./dropdown/index.scss";
import DropDown from "./dropdown/dropdown";

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
            <DropDown
              placeholder={"Text"}
              options={[
                { value: "ocean", label: "Ocean" },
                { value: "blue", label: "Blue" },
                { value: "purple", label: "Purple" },
                { value: "red", label: "Red" },
                { value: "orange", label: "Orange" },
                { value: "yellow", label: "Yellow" },
                { value: "green", label: "Green" },
                { value: "forest", label: "Forest" },
                { value: "slate", label: "Slate" },
                { value: "silver", label: "Silver" },
              ]}
            />
            <DropDown
              placeholder={"Block"}
              options={[
                { value: "ocean", label: "Ocean" },
                { value: "blue", label: "Blue" },
                { value: "purple", label: "Purple" },
                { value: "red", label: "Red" },
                { value: "orange", label: "Orange" },
                { value: "yellow", label: "Yellow" },
                { value: "green", label: "Green" },
                { value: "forest", label: "Forest" },
                { value: "slate", label: "Slate" },
                { value: "silver", label: "Silver" },
              ]}
            />
          </div>
          <div className={styles.productContainer_prducts_goods}></div>
        </div>
      </div>
    );
  }
}
