import React from "react";
import classes from "./Footer.module.scss";
import i18n from "../../../../config/i18n";

function Footer() {
    return (
        <footer className={classes.Footer}>
            <span className="Footer">{i18n.t("app.footer.main")}</span>
        </footer>
    );
}

export default Footer;
