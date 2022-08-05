import React from "react";
import "./AppLogo.css";

/*React Icons*/
import { GiExplodingPlanet } from "react-icons/gi";

export const AppLogo = () => {
  return (
    <div className="header-logo">
      <GiExplodingPlanet />

      <div className="header-texts">
        <h1>Space-Toys</h1>
        <h5>Trazidos do espaço para sua diversão!</h5>
      </div>
    </div>
  );
};
