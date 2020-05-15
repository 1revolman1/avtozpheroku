import React, { Component } from "react";
import style from "./Footer.module.scss";
import logo from "../../assets/header/logoF.svg";
export default class Footer extends Component {
  render() {
    return (
      <footer className={style.blockFooter}>
        <div className={style.blockFooter_wrapper}>
          <div className={style.blockFooter_wrapper_bl}>
            <img alt="logo" src={logo} />
          </div>
          <div className={style.blockFooter_wrapper_bl}>
            <h2>Car support</h2>
            <ul>
              <li>About company</li>
              <li>Warranty & Returns</li>
              <li>Payment</li>
              <li>Delivery</li>
              <li>Questions and answers</li>
            </ul>
          </div>
          <div className={style.blockFooter_wrapper_bl}>
            <h2>Каталог</h2>
            <ul>
              <li>Tires and wheels</li>
              <li>Technical fluids</li>
              <li>Batteries and service</li>
              <li>Online help</li>
              <li>Order parts</li>
            </ul>
          </div>
          <div className={style.blockFooter_wrapper_bl}>
            <h2>Address and Phones</h2>
            <ul>
              <li>+1(061) 701 10 03</li>
              <li>+1(095) 232 36 13</li>
              <li>+1(067) 603 30 36</li>
              <li>
                We work on weekdays from 08:00 - 19:00, on Saturday and Sunday
                from 09:00 - 16:00
              </li>
              <li>Zaporozhye, st. Mochanova, 3</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
