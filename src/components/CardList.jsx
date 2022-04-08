import React, { useState } from "react";
import { fetchWeatherId } from "../api/fetchWeather";
import Card from "./Card";
import s from "./styles/CardList.module.css"

const getFavCity = async (id) => {
    const data = await fetchWeatherId(id);
    return {
        id: id,
        name: data.name,
        temp: parseInt(data.main.temp),
        icon: Number(data.weather[0].id)
    }
}

const CardList = ({ cards, updateIdFavCities }) => {
    let [cities, SetCities] = useState(cards);

    const removeCity = (id) => {
        let newCities = cities.filter(elem => elem !== id);
        if (newCities.length === 0) updateIdFavCities([]);
        SetCities(newCities);
    }

    return(
        <div className={s.card_list}>
            {cities.map((card) => {
                let cityInfo = getFavCity(card);
                return <Card card={cityInfo} removeCity={removeCity} key={card}/>
            })}
        </div>
    )
}

export default CardList;