import React from "react"
import { Link } from "react-router"
import styles from "./Navbar.module.scss"
import LanguageSwitcher from "./LanguageSwitcher";
import { useIntl } from 'react-intl';

const Navbar = () => {
    const { formatMessage } = useIntl();

    return(
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link to="/" tabIndex={0} onClick={(e) => e.currentTarget.focus()}>{formatMessage({ id: "NavbarHomeTitle" })}</Link>
                </li>
                <li>
                    <Link to="/about">{formatMessage({ id: "NavbarAboutTitle" })}</Link>
                </li>
                <li>
                    <Link to="/team">{formatMessage({ id: "NavbarTeamTitle" })}</Link>
                </li>
                <li>
                    <LanguageSwitcher />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;