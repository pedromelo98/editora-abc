import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen.js";
import LoginScreen from "../screens/LoginScreen";
import PerfilScreen from "../screens/PerfilScreen.js";
import CatalogosScreen from "../screens/CatalogosScreen.js";
import RegisterScreen from "../screens/RegisterScreen.js";
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
                    <Route path="/perfil">
                        <PerfilScreen />
                    </Route>
                    <Route path="/register">
                        <RegisterScreen />
                    </Route>
                    <Route path="/catologos">
                        <CatalogosScreen />
                    </Route>
                </Switch>
            </App>
        </Router>
    );

}


export default Routes;