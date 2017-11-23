import React from "react";
import Header from "./header";
import Footer from "./footer";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
};

export default MainPage;