import { Routes, Route } from "react-router";
import Navbar from "../src/Components/Navbar/Navbar";
import Footer from "../src/Components/Footer/Footer";
import { lazy } from "react";

const Home = lazy(() => import("../src/Pages/Home"));
const About = lazy(() => import("../src/Pages/About"));
const Team = lazy(() => import("../src/Pages/Team"));

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