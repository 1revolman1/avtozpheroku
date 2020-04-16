import React, { Component } from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../../reducers/ProductsBlock/reducer.jsx";

const store = createStore(reducer);

export default class NowPage extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="product-container">
          <div className="header-component">
            <h1>Масло моторное</h1>
            <div className="block-settings">
              <div className="info">
                <p>Найдено 652 товара в категории</p>
              </div>
              <div className="settings">
                <select id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
                <div className="view"></div>
                <div className="view"></div>
              </div>
            </div>
          </div>
          <div className="prducts-component"></div>
        </div>
      </Provider>
    );
  }
}
