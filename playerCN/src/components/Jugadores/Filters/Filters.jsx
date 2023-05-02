import React from "react";
import style from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={style.containerFilters}>
      <div className={style.containersSelects}>
        <select name="videogame" id="videogame" className={style.selectGames}>
          <option value="" className={style.op}>
            Videojuego
          </option>
          <option value="" className={style.op}>
            Red DEAD Redemption
          </option>
          <option value="" className={style.op}>
            Fortnite
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
