import React, { useState } from "react";
import { setLocale } from "../../../store/languageSlice";
import { useDispatch } from "react-redux"
import styles from "./LanguageSwitcher.module.scss";

const LanguageSwitcher = () => {
    const [isUa, setIsUa] = useState(true);
    const dispatch = useDispatch();

    const handleLanguageChange = (locale: string) => {
        setIsUa(locale === "uk");
        dispatch(setLocale(locale));
    };
    const handleClick = () => {
        const newLocale = isUa ? "en" : "uk";
        handleLanguageChange(newLocale);
    };

    return (
        <div className={styles.container}>
            {isUa ? (
                <button className={styles.buttonSwitcher} onClick={handleClick}>🇺🇸</button>
            ) : (
                <button className={styles.buttonSwitcher} onClick={handleClick}>🇺🇦</button>
            )}
        </div>
    )
}

export default LanguageSwitcher;