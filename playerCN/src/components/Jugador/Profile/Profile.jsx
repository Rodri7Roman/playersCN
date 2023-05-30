import React from "react";
import Header from "./Header/Header";
import style from "./Profile.module.css";
import Description from "./Description/Description";
import Posts from "../../Posts/Posts";
const Profile = (props) => {
  return (
    <div className={style.containerProfile}>
      <Header user={props.user} />
      <Description  user={props.user}/>
      <div className={style.containerPost}>
        <Posts posts={props.posts} />
      </div>
    </div>
  );
};

export default Profile;
