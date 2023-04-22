import React, {Component} from "react"
import styles from "./card.module.css";
class card extends Component {
    
    render() { 
        const {image, name, cost} = this.props;
        return (
            <div className={styles.container}>
                <img src={image} alt="iphone"/>
                <div className={styles.text}>
                <h3>{name}</h3>
                <p>{cost}</p>
                </div>
                <a href="https://www.apple.com/iphone/">Buy Now</a>
            </div>
        );
    }
}
 
export default card;