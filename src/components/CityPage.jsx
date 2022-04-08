import React, { useState } from "react";
import Icon from "./Icon";
import s from "./styles/CityPage.module.css"
import { Link, useParams } from "react-router-dom";
import { getIconNameFromId } from "../getIconNameFromId";
import { fetchWeatherId } from "../api/fetchWeather";

const CityPage = ({ data }) => {
    let params = useParams();
    let [info, setInfo] = useState({});
    let id, nameIcon, timeSunset;
    if (Object.keys(info).length === 0 && Object.keys(data).length === 0) {
        data = fetchWeatherId(params.id);
        data.then((res) => {
            setInfo(res);
        })
        return <div>Loading...</div>
    }
    else if (Object.keys(data).length === 0) {
        data = info;
    }
    id = Number(data.weather[0].id);
    nameIcon = getIconNameFromId(id);
    timeSunset = new Date();
    timeSunset.setTime(data.sys.sunset + '000');
    return(
        <div className="cityPage">
            <div className={s.content}>
                <div className={s.controlMenu}>
                    <Link className={s.back} to='/'>
                        <div className={s.back_icon}><Icon name='back' /></div>
                        <div className={s.back_text}>Назад</div>
                    </Link>
                    <button className={s.favorite} onClick={() => {
                        if (localStorage.getItem('cities') === null) {
                            localStorage.setItem('cities', JSON.stringify([data.id]));
                        }
                        else {
                            let cities = JSON.parse(localStorage.getItem('cities'));
                            cities.push(data.id);
                            localStorage.setItem('cities', JSON.stringify(cities));
                        }
                    }}><Icon name='favorite' /></button>
                </div>
                <div className={s.content_name}>{data.name}</div>
                <div className={s.content_description}>{data.weather[0].description}</div>
                <div className={s.temp}>
                    <div className={s.temp_number}>{parseInt(data.main.temp)}°</div>
                    <div className={s.temp_icon}><Icon name={nameIcon} /></div>
                </div>
                <div className={s.pressure}>
                    <div className={s.pressure_icon}><Icon name='pressure' /></div>
                    <div className={s.pressure_number}>{data.main.pressure} мм рт. ст.</div>
                </div>
                <div className={s.sunset}>Закат в {timeSunset.toTimeString().split(' ')[0].slice(0, -3)}</div>
            </div>
        </div>
    )
}

export default CityPage;