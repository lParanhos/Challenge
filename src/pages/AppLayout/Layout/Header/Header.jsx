import React from "react";
import PropTypes from "prop-types";
import classes from "./Header.module.scss";
import Navigation from "../../../../components/Navigation/Navigation";
import { ReactComponent as VntIcon } from "../../../../assets/icons/vnt.svg";

function Header({
    title,
    navigationItems
}) {
    return (
        <header className={classes.Header}>
            <Navigation
                className={classes.Navigation}
                itemClassName={classes.NavigationItem}
                itemActiveClassName={classes.ActiveNavigationItem}
                items={navigationItems}
            />
            <div className={classes.Title}>
                <VntIcon className={classes.Icon}/>
                {title}
            </div>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    navigationItems: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string,
            label: PropTypes.string
        })
    ),

    renderContentsOnRight: PropTypes.func
};

Header.defaultProps = {
    navigationItems: []
};

export default Header;
