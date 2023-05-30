import React, { useEffect } from "react";
import Jugador from "../Jugador/Jugador";
import { useDispatch, useSelector } from "react-redux";

const MyProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  return (
    <div>
      <Jugador user={user} />
    </div>
  );
};

export default MyProfile;
