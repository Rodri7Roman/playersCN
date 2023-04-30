import React from "react";
import Header from "./Header/Header";
import style from "./Profile.module.css";
import Description from "./Description/Description";
import Posts from "../../Posts/Posts";
const Profile = () => {
  return (
    <div className={style.containerProfile}>
      <Header />
      <Description />
      <div className={style.containerPost}>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
