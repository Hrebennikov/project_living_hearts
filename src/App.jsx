import { Routes, Route } from "react-router";
import Navbar from "../src/Components/Navbar";
import Footer from "../src/Components/Footer/Footer";
import { lazy } from "react";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Team = lazy(() => import("./Pages/Team"));

const App = () => {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
        </>
    );
}

export default App;