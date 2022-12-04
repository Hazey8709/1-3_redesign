import React from "react";
import avatarImage from "./logo.png";

const MainAvatar = (props) => {
    return <img src={avatarImage} alt={props.alt} style={style.avatar} />;
};

export default MainAvatar;

const style = {
    avatar: {
        display: "flex",
        margin: "0 auto",
        marginTop: "1rem",
        border: ".1rem solid white",
        height: "6rem",
        width: "20rem",
        borderRadius: "10px",
    },
};
