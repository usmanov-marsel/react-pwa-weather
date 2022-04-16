import React, { useState } from "react";
import CardList from "./CardList";
import HintFavoriteText from "./HintFavoriteText";
import HintTextCity from "./HintTextCity";

export const HomeContent = () => {
  const [idFavoriteCities, setIdFavoriteCities] = useState(
    JSON.parse(localStorage.getItem("cities"))
  );
  if (!idFavoriteCities || !idFavoriteCities.length) {
    return (
      <>
        <HintTextCity />
        <HintFavoriteText />
      </>
    );
  }
  return (
    <CardList
      idFavoriteCities={idFavoriteCities}
      updateIdFavCities={setIdFavoriteCities}
    />
  );
};
