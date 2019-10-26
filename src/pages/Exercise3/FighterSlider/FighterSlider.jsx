import React, { Component } from "react";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow-right.svg";
import styles from "./FighterSlider.module.scss";

const availableFighters = [
    "ken",
    "ryu",
    "bison",
    "vega"
];

class Exercise3 extends Component {

    previousFighter = () => {
        const { fighter, onFighterChange } = this.props;
        const currIx = availableFighters.findIndex(c => c === fighter);
        onFighterChange(availableFighters[currIx - 1]);
    }

    nextFighter = () => {
        const { fighter, onFighterChange } = this.props;
        const currIx = availableFighters.findIndex(c => c === fighter);
        onFighterChange(availableFighters[currIx + 1]);
    }

    render() {
        const { children, fighter } = this.props;
        const isPreviousDisabled = fighter === availableFighters[0];
        const isNextDisabled = fighter === availableFighters[availableFighters.length - 1];

        return (
            <div className={styles.SliderContainer}>
                <Arrow className={`${styles.ArrowLeft} ${isPreviousDisabled && styles.ArrowDisabled}`} onClick={this.previousFighter} />
                {children}
                <Arrow className={`${styles.ArrowRight} ${isNextDisabled && styles.ArrowDisabled}`} onClick={this.nextFighter} />
            </div>
        );
    }
}

export default Exercise3;