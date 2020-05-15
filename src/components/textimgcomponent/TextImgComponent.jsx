import React, { Component } from "react";
import styles from "./TextImg.module.scss";

export default class TextImg extends Component {
  render() {
    return (
      <div className={styles.blockTextImg}>
        <div className={styles.blockTextImg__text}>
          <h2>Motor oils</h2>
          <p>
            The car engine needs constant care. Properly selected motor oil
            helps ensure its trouble-free and long-lasting operation, as well as
            increase productivity.
          </p>
          <h2>Types and Features</h2>
          <p>
            Before you buy engine oils for a car, you must determine the
            appropriate view. The catalog contains motor oils: HC-synthetic -
            developed using hydrocracking technology, have high viscosity and
            resistance to oxidation processes; mineral - characterized by
            increased viscosity, but have a low temperature range of operation,
            suitable for used units, the price of a car oil for a car of this
            variety lower than analogues with “synthetics”; semi-synthetic -
            possess improved performance than mineral analogues, at the same
            time they are cheaper than “synthetics”; synthetic - characterized
            good fluidity, can work in wide temperature ranges, have a long
            service life; flushing - used for effective cleaning of the motor
            from slag and deposits. Deciding to buy car oils in the online
            store, do not forget to consider such an important parameter like
            viscosity. Easy start-up and reliable lubrication depend on it. all
            engine components. The assortment of products of leading brands:
            Mannol, Castrol, Mobil, Motul, ZIC, Shell and others. Supplies are
            made directly from manufacturers, which gives our customers the
            ability to buy goods at a low price in bulk manufacturers.
          </p>
        </div>
        <div className={styles.blockTextImg__img}>
          <img
            src="https://shop.autoopora.com/fotos/cache/48021043884_1-238x238.jpg"
            alt="title"
          ></img>
        </div>
      </div>
    );
  }
}
