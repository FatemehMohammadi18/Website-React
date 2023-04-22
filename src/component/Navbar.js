import React from "react";
import styles from "./Navbar.module.css";
import logo from "./image/logo.png";
const Navber = () => {
     return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <li>Home</li>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>AirPods</li>
                    <li>About Us</li>
                </ul>
            </div>
        </header>
     );
};
export default Navber;