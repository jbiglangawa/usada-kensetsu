import React from "react";
import classes from '../Credits.module.css'

export default class SectionSeparator extends React.Component {

    render() {
        return (
            <div className={classes.sectionSeparator}>
                <h1 className={classes.sectionSeparatorTitle}>
                    {this.props.title}
                </h1>
            </div>
        )
    }

}