import React from "react";
import BlockCheckout from "../components/blockcomponent/BlockCheckout";
import styles from "./Bought.module.scss";
export default function Favourite() {
  return (
    <React.Fragment>
      <div className={styles.head}>
        <h1 className={styles.head_text}>Вам нравится: </h1>
      </div>
      <BlockCheckout />
    </React.Fragment>
  );
}
