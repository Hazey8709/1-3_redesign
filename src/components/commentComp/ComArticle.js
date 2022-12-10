import React from "react";

const ComArticle = (props) => {
    return (
        <article style={style.articleCont}>
            <img src={props.val.cImg} alt={props.val.cAlt} />
            <h1>{props.val.cName}</h1>
            <p>{props.val.cDescrip}</p>
            <div style={style.btnCont}>
                <button type='edit' style={style.editBtn}>
                    Submit
                </button>
                <button type='delete' style={style.deleteBtn}>
                    Reset
                </button>
            </div>
        </article>
    );
};

export default ComArticle;
const style = {
    articleCont: {},

    btnCont: {},

    editBtn: {},

    deleteBtn: {},
};
