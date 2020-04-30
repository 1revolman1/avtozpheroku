import React, { Component } from "react";
import styled from "styled-components";
import style from "./Footer.module.scss";
export default class Footer extends Component {
  render() {
    return (
      <footer className={style.blockFooter}>
        <div className={style.blockFooter_wrapper}>
          <div className={style.blockFooter_wrapper_bl}>
            <img
              alt="logo"
              src="https://shop.autoopora.com/catalog/view/theme/default/stylesheet/img/logo-footer.png"
            />
          </div>
          <div className={style.blockFooter_wrapper_bl}>
            <h2>Автоопора</h2>
            <ul>
              <li>О компании</li>
              <li>Гарантии и возврат</li>
              <li>Оплата</li>
              <li>Доставка</li>
              <li>Вопросы и ответы</li>
            </ul>
          </div>
          <div className={style.blockFooter_wrapper_bl}>
            <h2>Каталог</h2>
            <ul>
              <li>Шины и диски</li>
              <li>Технические жидкости</li>
              <li>Аккумуляторы и сервис</li>
              <li>Онлайн помощь</li>
              <li>Заказать запчасти</li>
            </ul>
          </div>
          <div className={style.blockFooter_wrapper_bl}>
            <h2>Адрес и телефоны</h2>
            <ul>
              <li>(061) 701 10 03</li>
              <li>(095) 232 36 13</li>
              <li>(067) 603 30 36</li>
              <li>
                Работаем в будние дни с 08:00 – 19:00, в субботу и воскресенье
                с 09:00 – 16:00
              </li>
              <li>г. Запорожье, ул. Седова, 7</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
