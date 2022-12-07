import React, { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/navComp/Nav";
import MainAd from "./components/mainAdComp/MainAd";
import Ads from "./components/adComp/Ads";
import Comments from "./components/commentComp/Comment";
// import CommList from "./components/";
// import AvatarImage1 from "./images";
// import AvatarImage2 from "./images";
// import ProjectImage from "./images";
import Footer from "./components/Footer";

class App extends Component {
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
            <section>
                <Header logoTitle='Jordan' />
                <main style={style.mainCont}>
                    <Nav />
                    <MainAd
                        mainAdTitle='Noobie J'
                        aboutPara='
                        Enjoy taking a look at my design. It is a little project for class at Full Sail. This project was created using React some JavaScript, CSS and HTML. Hope you like it, it is a work in progress..
                    '
                    />
                    <Ads />
                </main>
                <Comments />
                <Footer />
            </section>
        );
    }
}

export default App;

const style = {
    mainCont: {
        display: "flex",
        gridTemplateArea: "",
        marginTop: ".5rem",
        border: "1px solid yellow",
        width: "100%",
        height: "100%",
    },
};
