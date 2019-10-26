import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import i18n from "../../config/i18n";
import Exercise1 from "../Exercise1/Exercise1";
import Exercise2 from "../Exercise2/Exercise2";
import Exercise3 from "../Exercise3/Exercise3";
import Exercise4 from "../Exercise4/Exercise4";

import Layout from "./Layout/Layout";

const navigationItems = [{
    link: '/exercise1',
    label: i18n.t("app.menu.exercise_1"),
    component: <Exercise1 />
}, {
    link: '/exercise2',
    label: i18n.t("app.menu.exercise_2"),
    component: <Exercise2 />
}, {
    link: '/exercise3',
    label: i18n.t("app.menu.exercise_3"),
    component: <Exercise3 />
}, {
    link: '/exercise4',
    label: i18n.t("app.menu.exercise_4"),
    component: <Exercise4 />
}];

function AppLayout() {
    return (
        <Layout navigationItems={navigationItems}>
            <Switch>
                {navigationItems.map(({ component, link }) => (
                    <Route
                        key={link}
                        path={link}
                        render={() => component}
                    />
                ))}
                <Route exact path="/">
                    <Redirect to="/exercise1/" />
                </Route>
            </Switch>
        </Layout>
    );
}

export default AppLayout;
