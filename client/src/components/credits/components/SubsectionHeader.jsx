import React from 'react';
import classes from "../Credits.module.css";

const SubsectionHeader = (props) => {

    return (
        <div className="container">
            <div className="pt-5 pb-5 d-flex justify-content-center align-items-center flex-column">
                <h2 className={classes.subsectionTitle}>
                    {props.title}
                </h2>
                <div className={classes.subsectionDivider}></div>
                <p className={classes.subsectionSubtitle}>
                    {props.subtitle}
                </p>
            </div>
        </div>
    )

}

export default SubsectionHeader