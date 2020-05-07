import React from "react";
import BlockCheckout from "../components/blockcomponent/BlockCheckout";
import BlockAllBuy from "../containers/BlockAllBuy";
import styles from "./Bought.module.scss";
export default function Favourite() {
  return (
    <React.Fragment>
      <div className={styles.head}>
        <h1 className={styles.head_text}>В корзине: </h1>
      </div>
      <BlockCheckout />
      <BlockAllBuy />
    </React.Fragment>
  );
}
