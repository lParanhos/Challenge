import React from "react";
import PropTypes from "prop-types";
import classes from "./DescriptionExercise.module.scss";

function DescriptionExercise({ description, instructions }) {
    return (
        <div className={classes.Description}>
            <div>
                {description && <span>{description}</span>}
                <ol>
                    {instructions &&
                        instructions.map((value, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <li key={index}>
                                {typeof value === "function" ? value() : value}{" "}
                            </li>
                        ))}
                </ol>
            </div>
        </div>
    );
}

DescriptionExercise.propTypes = {
    description: PropTypes.string,
    instructions: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    )
};

DescriptionExercise.defaultProps = {
    description: null,
    instructions: null
};

export default DescriptionExercise;
