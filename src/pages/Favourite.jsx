import React from "react";
import styles from "./Bought.module.scss";
import BlockFavourite from "../components/blockcomponent/BlockFavourite";
export default function Favourite() {
  return (
    <React.Fragment>
      <div className={styles.head}>
        <h1 className={styles.head_text}>In favorites: </h1>
      </div>
      <BlockFavourite />
    </React.Fragment>
  );
}
