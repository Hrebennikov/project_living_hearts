import { Routes, Route } from "react-router";
import Footer from "../src/Components/Footer/Footer";
import { lazy, Suspense } from "react";
import Header from "./Components/Header/Header";
import uk from "./locales/ua/translation.json";
import en from "./locales/en/translation.json";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { IntlProvider } from "react-intl";
import Loader from "./Components/Loader";


const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Team = lazy(() => import("./Pages/Team"));

const messages: Record<'uk' | 'en', any> = { en, uk };

const App = () => {
    const locale = useSelector((state: RootState) => state.language.locale);

    return (
        <IntlProvider locale={locale} messages={messages[locale as 'uk' | 'en']}>
        <div className="app-wrapper">
            <Header />
            <Suspense fallback={<Loader />} />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/team" element={<Team />} />
                </Routes>
            </div>
            <Footer />
        </div>
        </IntlProvider>
    );
};

export default App;