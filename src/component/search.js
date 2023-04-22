import React, { Component } from 'react';
import styles from "./search.module.css"

class search extends Component {
    render() {
        return (
            <div className={styles.container}>
                <p>Search whatever you want</p>
                <input type={search} placeholder="Search ..."/>
            </div>
        );
    }
}

export default search;