import React, { Component } from "react";

import Cform from "./Cform";
import CCard from "../CCard";
// import CommList from "./components/";
// import AvatarImage1 from "./images";
// import AvatarImage2 from "./images";
// import ProjectImage from "./images";

class Comments extends Component() {
    state = {
        cList: [
            {
                // cAvatar: AvatarImage1,
                cName: "Jordan's Project",
                cDescrip: "Check out my Project",
                // cImg: ProjectImage,
                Alt: "",
            },
            {
                // cAvatar: AvatarImage2 ,
                cName: "George",
                cDescrip: "I learned Css & Js, Finally!",
                Alt: "",
            },
        ],
    };

    render() {
        return (
            <section style={style.mainCommentsCont}>
                <Cform />
                <div style={style.comsCont}>
                    <CCard
                        cCardTitle='Card Title'
                        cCardDetails='Card details Card details Card details Card details Card details Card details'
                    />
                </div>
            </section>
        );
    }
}

export default Comments;

const style = {
    mainCommentsCont: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid red",
        borderRadius: "1rem",
        backgroundColor: "#0005",
        marginTop: "2rem",
        // height: "30rem",
        width: "100%",
    },

    comsCont: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid white",
        borderRadius: ".4rem",
        backgroundColor: "#aaaaaa",
        marginLeft: "48%",
        marginTop: "1rem",
        marginBottom: "1rem",
        marginRight: "1rem",
        padding: ".5rem",
        width: "50%",
        height: "100%",
    },
};
