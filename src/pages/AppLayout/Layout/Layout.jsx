import React, { Fragment } from "react";
import PropTypes from "prop-types";
import i18n from "../../../config/i18n";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import classes from "./Layout.module.scss";

function Layout({ children, navigationItems }) {
    return (
        <Fragment>
            <Header title={i18n.t("app.title")} navigationItems={navigationItems} />
            <main className={classes.Main}>{children}</main>
            <Footer />
        </Fragment>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    navigationItems: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string,
            label: PropTypes.string
        })
    )
};

Header.defaultProps = {
    navigationItems: []
};

export default Layout;
