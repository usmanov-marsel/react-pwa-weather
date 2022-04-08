import React, { useState } from "react";
import CardList from "./CardList";
import HintFavoriteText from "./HintFavoriteText";
import HintTextCity from "./HintTextCity";
import SearchCity from "./SearchCity";

const Home = ({ onDataChange }) => {
    let [idFavoriteCities, setIdFavoriteCities] = useState([]);

    const updateIdFavCities = (cities) => {
        setIdFavoriteCities(cities);
    }

    if (idFavoriteCities.length === 0 && localStorage.getItem('cities') !== null) {
        idFavoriteCities = JSON.parse(localStorage.getItem('cities'));
    }
    return(
        <>
        <SearchCity  onDataChange={onDataChange}/>
        {idFavoriteCities.length === 0 
        ? <>
            <HintTextCity /> 
            <HintFavoriteText />
        </>
        : <CardList cards={idFavoriteCities} updateIdFavCities={updateIdFavCities} />}
        </>
    )
}

export default Home;