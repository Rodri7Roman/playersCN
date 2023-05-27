import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>NO PUEDES ESTAR AQUI.</h1>
      <NavLink to={"/"}>Volver al inicio o iniciar sesion.</NavLink>
    </div>
  );
};

export default Error;
