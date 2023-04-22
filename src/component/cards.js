import React, { Component } from 'react';
import Card from "./card";
import iphone from "./image/iphone14.webp";
import iphone13 from "./image/image13.jpg";
import iphone15 from "./image/iphone15.jpg";
import iphone12 from "./image/image12.jpg";



import styles from "./cards.module.css";




class Cards extends Component {
    
    render() { 
        return (
            <div className={styles.container}>
                <Card image={iphone}   name="iPhone14 Pro" cost="600$" />
                <Card image={iphone13} name="iPhone13" cost="500$" />
                <Card image={iphone15} name="iPhone12" cost="800$" />
                <Card image={iphone12} name="iPhone13 Pro" cost="600$" />
            </div>
        );
    }
}
 
export default Cards;