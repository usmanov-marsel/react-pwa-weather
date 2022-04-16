import React, { useState } from "react";
import Icon from "./Icon";
import s from "./styles/CityPage.module.css";
import { Link, useParams } from "react-router-dom";
import { getIconNameFromId } from "../getIconNameFromId";
import { fetchWeatherId } from "../api/fetchWeather";

const CityPage = ({ data }) => {
  const cities = JSON.parse(localStorage.getItem("cities"));
  const params = useParams();
  const [info, setInfo] = useState(data);
  const [message, setMessage] = useState("");
  if (Object.keys(info).length === 0 || Number(params.id) !== info.id) {
    fetchWeatherId(params.id).then((res) => {
      setInfo(res);
    });
    return <div>Loading...</div>;
  }
  const id = Number(info.weather[0].id);
  const nameIcon = getIconNameFromId(id);
  const timeSunset = new Date();
  timeSunset.setTime(info.sys.sunset + "000");

  const saveFavotite = () => {
    if (!cities) {
      localStorage.setItem("cities", JSON.stringify([info.id]));
      setMessage("Город успешно добавлен на главный экран!");
    } else if (!cities.includes(info.id)) {
      cities.push(info.id);
      localStorage.setItem("cities", JSON.stringify(cities));
      setMessage("Город успешно добавлен на главный экран!");
    } else {
      const newCities = cities.filter((elem) => elem !== info.id);
      if (!newCities.length) {
        localStorage.removeItem("cities");
      } else {
        localStorage.setItem("cities", JSON.stringify(newCities));
      }
      setMessage("Город убран из главного экрана!");
    }
    setTimeout(() => setMessage(""), 2500);
  };

  return (
    <div className="cityPage">
      <div className={s.content}>
        <div className={s.controlMenu}>
          <Link className={s.back} to="/">
            <div className={s.back_icon}>
              <Icon name="back" />
            </div>
            <div className={s.back_text}>Назад</div>
          </Link>
          <button
            className={
              !cities || !cities.includes(info.id) ? s.favorite : s.favorite_add
            }
            onClick={saveFavotite}
          >
            <Icon name="favorite" />
          </button>
        </div>
        <div className={s.content_name}>{info.name}</div>
        <div className={s.content_description}>
          {info.weather[0].description}
        </div>
        <div className={s.temp}>
          <div className={s.temp_number}>{parseInt(info.main.temp)}°</div>
          <div className={s.temp_icon}>
            <Icon name={nameIcon} />
          </div>
        </div>
        <div className={s.pressure}>
          <div className={s.pressure_icon}>
            <Icon name="pressure" />
          </div>
          <div className={s.pressure_number}>
            {info.main.pressure} мм рт. ст.
          </div>
        </div>
        <div className={s.sunset}>
          Закат в {timeSunset.toTimeString().split(" ")[0].slice(0, -3)}
        </div>
      </div>
      <div className={s.message}>{message}</div>
    </div>
  );
};

export default CityPage;
