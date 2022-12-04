import React from "react";
import mainAdImage from "./fb-Ad.webp";

const MainAdImage = (props) => {
    return <img src={mainAdImage} alt={props.alt} style={style.avatar} />;
};

export default MainAdImage;

const style = {
    avatar: {
        display: "flex",
        margin: "0 auto",
        marginTop: "5rem",
        height: "20rem",
        width: "30rem",
        borderRadius: "10px",
    },
};
