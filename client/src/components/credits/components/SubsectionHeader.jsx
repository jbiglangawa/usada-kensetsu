import React from 'react';
import { Trans, useTranslation } from 'react-i18next'
import classes from "../Credits.module.css";

const SubsectionHeader = (props) => {

    const [t] = useTranslation("credits")
    return (
        <div className="container">
            <div className="pt-5 d-flex justify-content-center align-items-center flex-column">
                <h2 className={classes.subsectionTitle}>
                    <Trans t={t}>
                        {props.title}
                    </Trans>
                </h2>
                <div className={classes.subsectionDivider}></div>
                <p className={classes.subsectionSubtitle}>
                    <Trans t={t}>
                        {props.subtitle}
                    </Trans>
                </p>
            </div>
        </div>
    )

}

export default SubsectionHeader