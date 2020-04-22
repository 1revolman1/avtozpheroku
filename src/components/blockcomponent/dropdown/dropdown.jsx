import React, { Component } from "react";
import Select, { components } from "react-select";
import createClass from "create-react-class";
import "./index.scss";

const colourStyles = {
  option: (provided, state) => ({
    ...provided,
    background: "white",
    color: "black",
    ":active": {
      background: "white",
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    position: "relative",
    boxShadow: "none",
  }),
  container: (provider, state) => ({
    ...provider,
    margin: "10px 0",
    maxWidth: "270px",
    "@media screen and (max-width:768px)": {
      maxWidth: "initial",
      width: "100%",
    },
    ":first-child": {
      margin: "0 0 10px 0",
    },
  }),
  control: (provider, state) => ({
    ...provider,
    borderRadius: "6px",
    border: "solid 1px #d9d9d9",
    padding: "10px 5px",
  }),

  dropdownIndicator: (base, state) => ({
    ...base,
    transition: "all .2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0)",
  }),
  menuList: (base, state) => ({
    ...base,
    // maxHeight: "initial",
    // overflow: "auto",
  }),
  placeholder: (base, state) => ({
    ...base,

    fontFamily: "Rubik ,sans-serif",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "1px",
    color: "#000000",
  }),
};
const Option = createClass({
  render() {
    return (
      <div>
        <components.Option className="prettie-checbox" {...this.props}>
          <input type="checkbox" checked={this.props.isSelected} />
          <label>{this.props.value} </label>
        </components.Option>
      </div>
    );
  },
});

export default class extends Component {
  render() {
    const { placeholder, options, onChange, selectedOption } = this.props;
    function newOnChange(value) {
      this.onChange(value, placeholder);
    }
    return (
      <Select
        styles={colourStyles}
        closeMenuOnSelect={false}
        value={selectedOption}
        isMulti
        components={{ Option, MultiValue, Menu }}
        options={options}
        hideSelectedOptions={false}
        placeholder={placeholder}
        // menuIsOpen
        backspaceRemovesValue={false}
        onChange={newOnChange}
        // onChange={(e) => console.log(e)}
      />
    );
  }
}

const MultiValue = (props) => {
  return (
    <components.MultiValue {...props}>
      <span>{props.data.value}</span>
    </components.MultiValue>
  );
};
const Menu = (props) => {
  return <components.Menu className="multi-value" {...props}></components.Menu>;
};
