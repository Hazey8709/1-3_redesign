import React from "react";
// import CAvatarImage from "./logo.png";

const CAvatar = (props) => {
    return (
        <img src={props.CAvatarImage} alt={props.alt} style={style.avatar} />
    );
};

export default CAvatar;

const style = {
    avatar: {
        border: "1px solid black",
        borderRadius: ".5rem",
        margin: "0 auto",
        marginLeft: "3rem",
        width: "10rem",
        height: "3rem",
    },
};
