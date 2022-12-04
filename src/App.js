import Header from "./components/Header";
import Nav from "./components/navComp/Nav";
import MainAd from "./components/mainAdComp/MainAd";
import Ads from "./components/adComp/Ads";
//import CCard from "./components/cardComp/CCard";
//import Cform from "./components/formComp/Cform";

function App() {
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
                {/* <Cform /> */}
            </main>
        </section>
    );
}

export default App;

const style = {
    mainCont: {
        display: "flex",
        // position: "absolute",
        gridTemplateArea: "",
        marginTop: ".5rem",
        border: "1px solid yellow",
        width: "100%",
        height: "100%",
    },
};
