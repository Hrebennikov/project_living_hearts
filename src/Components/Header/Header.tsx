import React from "react";
import Navbar from "../Navbar";
import styles from "./Header.module.scss";
import { Link } from "react-router";

function Header() {
    return (
        <div className={styles.header_container}>
        <header className={styles.header}>
            <div className={styles.header_content}>
          <div className={styles.logo_container}>
            <Link to="/" className={styles.logo_link}>
              <img src="/logo_living.png" alt="Logo" className={styles.img_logo} />
            </Link>
          </div>
          <Navbar />
          </div>
        </header>
        </div>
    );
}
export default Header;