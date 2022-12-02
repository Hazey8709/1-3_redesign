import Cform from "./components/formComp/Cform";
import Header from "./components/Header";
import Nav from "./components/navComp/Nav";

function App() {
    return (
        <content>
            <Header logoTitle='Jordan' />
            <main style={style.mainCont}>
                <Nav />
                <Cform />
            </main>
        </content>
    );
}

export default App;

const style = {
    mainCont: {
        display: "flex",
        marginTop: ".5rem",
        border: "1px solid yellow",
        width: "100%",
        height: "100%",
    },
};
