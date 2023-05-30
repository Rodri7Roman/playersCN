import React, { useEffect } from "react";
import Jugador from "../Jugador/Jugador";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByUser } from "../../redux/actions/posts/posts";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const postsUser = useSelector((state) => state.postsUser);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/ingresar");
    dispatch(getPostsByUser(token));
  }, []);
  return (
    <div>
      <Jugador user={user} posts={postsUser} />
    </div>
  );
};

export default MyProfile;
