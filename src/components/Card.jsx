import React, { useState } from "react";
import { getIconNameFromId } from "../getIconNameFromId";
import s from "./styles/Card.module.css";
import Icon from "./Icon";
import { Link } from "react-router-dom";

const Card = ({ cityInfo, removeCity }) => {
  const [city, setCity] = useState("");
  cityInfo.then((res) => {
    setCity(res);
  });
  if (city === "") {
    return <div>Loading...</div>;
  }
  const onDeleteLocalStorage = () => {
    const ids = JSON.parse(localStorage.getItem("cities")).filter(
      (elem) => elem !== city.id
    );
    if (ids.length === 0) {
      localStorage.removeItem("cities");
    } else {
      localStorage.setItem("cities", JSON.stringify(ids));
    }
    removeCity(city.id);
  };
  const url = `/city/${city.id}`;
  return (
    <div className={s.card}>
      <Link
        to={url}
        style={{ textDecoration: "none", color: "white" }}
        className={s.component}
      >
        <div className={s.card_name}> {city.name}</div>
        <div className={s.card_temp}> {parseInt(city.temp)}°</div>
        <div className={s.card_icon}>
          <Icon name={getIconNameFromId(city.icon)} />
        </div>
      </Link>
      <div className={s.icon_delete}>
        <button onClick={onDeleteLocalStorage}>
          <Icon name="delete" />
        </button>
      </div>
    </div>
  );
};

export default Card;
