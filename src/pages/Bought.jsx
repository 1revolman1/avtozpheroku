import React from "react";
import { Link } from "react-router-dom";
import BlockCheckout from "../components/blockcomponent/BlockCheckout";

export default function Favourite() {
  return (
    <React.Fragment>
      <h1>Вам нравится: </h1>
      <Link to="/">кликни</Link>
      <BlockCheckout />
    </React.Fragment>
  );
}
