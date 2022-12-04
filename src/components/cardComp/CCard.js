import React from "react";

const CCard = (props) => {
    return (
        <article style={style.commCont}>
            <div style={style.cardCont}>
                <img src='' alt={props.alt} style={style.cCardImage} />
                <h3 style={style.cCardTitle}>{props.cCardTitle}</h3>
                <p style={style.cCardDetails} props={props.cCardDetails}></p>
            </div>
        </article>
    );
};

export default CCard;

const style = {
    commCont: {
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        border: "1px solid blue",
        margin: "0 auto",
        marginTop: "21rem",
        marginLeft: "10rem",
        padding: ".8rem",
        // width: "22.3rem",
        height: "27.5rem",
    },

    cardCont: {
        display: "flex",
        border: "1px solid red",
        // margin: "0 auto",
        marginTop: "1rem",
        // marginLeft: "10rem",
        // width: "20rem",
        // height: "20rem",
    },

    // cCardImage: {
    //     border: "1px solid yellow",
    //     borderRadius: ".1rem",
    //     margin: "5rem",
    //     width: "10rem",
    //     height: "4rem",
    // },

    cCardTitle: {},

    cCardDetails: {},
};
