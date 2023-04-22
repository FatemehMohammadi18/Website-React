import React, { Component } from 'react';
import styles from "./footer.module.css";
import img from "./image/apple company.jpg";

class footer extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.imgdiv}>
                    <img src={img} alt="company" />
                </div>
                <div className={styles.aboutus}>
                    <h5>About Us</h5>
                    <p>
                      Apple Inc. is an American multinational technology company headquartered in Cupertino, California.
                      Apple is the world's largest technology company by revenue, with US$394.3 billion in 2022 revenue.
                      As of March 2023, Apple is the world's biggest company by market capitalization.
                      As of June 2022, Apple is the fourth-largest personal computer vendor by unit sales and second-largest mobile phone manufacturer.
                      It is one of the Big Five American information technology companies, alongside Alphabet Inc.
                     (parent company of Google), Amazon, Meta Platforms (formerly for Facebook Inc), and Microsoft. 
                    </p>
                </div>
            </div>
        );
    }
}

export default footer;