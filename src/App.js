import React, {Component} from "react";
import Banner from "./component/banner";
import Cards from "./component/cards";
import Navbar from "./component/Navbar";
import Search from "./component/search";
import Footer from "./component/footer";

import "./index.css";
class App  extends Component {
    
    render() { 
        return (
            <div>
                <Navbar />
                <Banner />
                <Cards />
                <Search />
                <Footer />
            </div>
        );
    }
}
 
export default App;