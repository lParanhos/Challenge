import React from "react";
import PropTypes from "prop-types";
import classes from "./Tag.module.scss";

function Tag({ tagName }) {
    return <span className={classes.Tag}>{tagName}</span>;
}

Tag.propTypes = {
    tagName: PropTypes.string
};

Tag.defaultProps = {
    tagName: ""
};

export default Tag;
