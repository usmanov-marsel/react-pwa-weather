import React from "react";
import s from "./styles/Header.module.css";
import Icon from "./Icon";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <div className={s.logo__icon}>
          <Icon name="header-logo" />
        </div>
        <div className={s.logo__text}>WeatherCheck</div>
      </div>
    </header>
  );
};

export default Header;
