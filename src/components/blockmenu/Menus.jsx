import React, { Component } from "react";
import styles from "./Menues.module.scss";
import DropDown from "../blockcomponent/dropdown/dropdown";
// import Card from "../productcard/Card";

export default class Menus extends Component {
  componentDidMount = (e) => {
    this.props.getMenues();
  };
  handleChange = (selectedOption, withcSelected) => {
    // this.setState((prevState) => ({
    //   selectedOption: {
    //     ...prevState.selectedOption,
    //     [withcSelected]: selectedOption,
    //   },
    // }));
    console.log(selectedOption, withcSelected);
    this.props.setFilter(selectedOption, withcSelected);
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
        {!isFetching ? (
          this.renderDropDown(menues)
        ) : (
          <div>Загружаю меню...</div>
        )}
        {/* {this.renderDropDown()} */}
      </div>
    );
  }
}
