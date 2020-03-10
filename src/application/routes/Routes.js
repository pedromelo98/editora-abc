import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen.js";
import LoginScreen from "../screens/LoginScreen";
import App from "../../App";


function Routes() {

    return (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    <Route path="/login">
                        <LoginScreen />
                    </Route>
                </Switch>
            </App>
        </Router>
    );

}


export default Routes;