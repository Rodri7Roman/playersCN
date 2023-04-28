import React from "react";
import style from "./Description.module.css";

const Description = () => {
  return (
    <div className={style.containerDescription}>
      <div>
        <div className={style.containerName}>
          <h1>Imperial</h1>
        </div>
        <div className={style.containerArroba}>
          <h2>@Imperial_</h2>
        </div>
        <div className={style.containerContent}>
          <div>
            <h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit quas debitis amet impe dita dignissimos, aut
              laudantium repellendus repudiandae quidem et. Voluptas labore
              eveniet non velit porro quas culpa ut est. Reprehenderit quas
              debitis amet laudantium repellendus repudiandae quidem et.
              Voluptas labore eveniet non velit porro quas culpa ut est.
              Reprehenderit quas debitis amet
            </h3>
          </div>
          <div className={style.containerDatos}>
            <h4>Argentina</h4>
            <h4>270 seguidores · 450 siguiendo</h4>
            <div className={style.containerFollow}>
              <button>Seguir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
