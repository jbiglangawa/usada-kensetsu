import React from "react";
import classes from '../Credits.module.css'

const SectionSeparator = (props) => {

    return (
        <div className={classes.sectionSeparator}>
            <h1 className={classes.sectionSeparatorTitle}>
                {props.title}
            </h1>
        </div>
    )
}

export default SectionSeparator