import React from "react";
import s from "./styles/HintTextCity.module.css";
import Icon from "./Icon";

const HintTextCity = () => {
    return(
        <div className={s.hintText}>
            Начните вводить город,<br />
            например, <span>Ижевск</span><br />
            <Icon name="arrow" className={s.hintArrow}/>
        </div>
    )
}

export default HintTextCity;