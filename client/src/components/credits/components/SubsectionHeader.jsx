import React from 'react';
import classes from "../Credits.module.css";

export default class SubsectionHeader extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="pt-5 pb-5 d-flex justify-content-center align-items-center flex-column">
                    <h2 className={classes.subsectionTitle}>
                        {this.props.title}
                    </h2>
                    <div className={classes.subsectionDivider}></div>
                    <p className={classes.subsectionSubtitle}>
                        {this.props.subtitle}
                    </p>
                </div>
            </div>
        )
    }
}