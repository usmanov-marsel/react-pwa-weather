import React from "react";
import s from "./styles/HintTextCity.module.css";
import Icon from "./Icon";
import { Link } from "react-router-dom";

const HintTextCity = () => {
  return (
    <div className={s.hintText}>
      Начните вводить город,
      <br />
      например,
      <Link to="/city/554840">
        <span>Ижевск</span>
      </Link>
      <br />
      <Icon name="arrow" className={s.hintArrow} />
    </div>
  );
};

export default HintTextCity;
