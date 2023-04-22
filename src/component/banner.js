import React from "react";
import styles from "./banner.module.css";
import imgbanner from "./image/iphone14banner.png";

const Banner = () => {
     return(
        <div className={styles.container}>
            <img src={imgbanner} alt="Banner"></img>
            <h2>Behinde Every Product is A Plan for</h2>
            <h1>Environment</h1>
            <a className={styles.link} href="https://www.apple.com/environment/">See our progress</a>
        </div>
     )
};
export default Banner;