import React, { useState } from "react";
import CardList from "./CardList";
import HintFavoriteText from "./HintFavoriteText";
import HintTextCity from "./HintTextCity";

export const HomeContent = () => {
    const [idFavoriteCities, setIdFavoriteCities] = useState(JSON.parse(localStorage.getItem('cities')));
    
    return(
        <>
        {idFavoriteCities === null || idFavoriteCities.length === 0
            ? <>
                <HintTextCity /> 
                <HintFavoriteText />
            </>
            : <CardList idFavoriteCities={idFavoriteCities} updateIdFavCities={setIdFavoriteCities} />}
        </>
    )
}