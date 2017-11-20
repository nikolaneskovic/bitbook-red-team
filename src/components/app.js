import React from "react";
import { Switch, Route } from "react-router-dom";

import HelloWorld from "./helloWorld/helloWorld";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HelloWorld />;
    }
}

export default App;
