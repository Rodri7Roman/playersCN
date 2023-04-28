import React from "react";
import Header from "./Header/Header";
import style from "./Profile.module.css";
import Description from "./Description/Description";
const Profile = () => {
  return (
    <div className={style.containerProfile}>
      <Header />
      <Description />
    </div>
  );
};

export default Profile;
