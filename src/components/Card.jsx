import React, { useState } from "react";
import { getIconNameFromId } from "../getIconNameFromId";
import s from "./styles/Card.module.css";
import Icon from "./Icon";


const Card = ({ card, removeCity }) => {
    let [city, setCity] = useState('');
    card.then((res) => {
        setCity(res);
    })
    if (city === '') {
        return <div>Loading...</div>
    }
    else {
        return(
            <div className={s.card}>
                <div className={s.card_name}> {city.name}</div>
                <div className={s.card_temp}> {parseInt(city.temp)}°</div>
                <div className={s.card_icon}><Icon name={getIconNameFromId(city.icon)} /></div>
                <div className={s.icon_delete}> <button onClick={() => {
                    let ids = JSON.parse(localStorage.getItem('cities'));
                    ids = ids.filter(elem => elem !== city.id);
                    if (ids.length === 0) {
                        localStorage.removeItem('cities');
                    }
                    else {
                        localStorage.setItem('cities', JSON.stringify(ids));
                    }
                    removeCity(city.id);
                }}><Icon name='delete' /></button></div>
            </div>
        )
    }
}

export default Card;