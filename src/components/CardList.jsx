import React, { useState } from "react";
import { fetchWeatherId } from "../api/fetchWeather";
import Card from "./Card";
import s from "./styles/CardList.module.css";

const getFavCity = async (id) => {
  const data = await fetchWeatherId(id);
  return {
    id: id,
    name: data.name,
    temp: parseInt(data.main.temp),
    icon: Number(data.weather[0].id),
  };
};

const CardList = ({ idFavoriteCities, updateIdFavCities }) => {
  const [cities, setCities] = useState(idFavoriteCities);

  const removeCity = (id) => {
    const newCities = cities.filter((elem) => elem !== id);
    if (!newCities.length) updateIdFavCities([]);
    setCities(newCities);
  };

  return (
    <div className={s.card_list}>
      {cities.map((card) => {
        const cityInfo = getFavCity(card);
        return <Card cityInfo={cityInfo} removeCity={removeCity} key={card} />;
      })}
    </div>
  );
};

export default CardList;
