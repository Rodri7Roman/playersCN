import React from "react";
import style from "./Header.module.css";
import banner from "../../../../assets/imgs/banner2.png";
import perfil from "../../../../assets/imgs/logoEquipo2.png";

const Header = () => {
  return (
    <div className={style.containerHeader}>
      <div className={style.containerBanner}>
        <img src={banner} alt="Banner" className={style.imgBanner} />
      </div>
      <div className={style.containerImgPerfil}>
        <img src={perfil} alt="foto perfil" className={style.imgPerfil} />
      </div>
    </div>
  );
};

export default Header;
