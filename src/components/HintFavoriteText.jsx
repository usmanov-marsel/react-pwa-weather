import React from "react";
import Icon from "./Icon";
import s from "./styles/HintFavoriteText.module.css";

const HintFavoriteText = () => {
  return (
    <div className="hint">
      <div className={s.text}>
        Используйте значок «закладки»,
        <br />
        чтобы закрепить город на главной
      </div>
      <Icon name="favorite" />
    </div>
  );
};

export default HintFavoriteText;
