import React from "react";
import { Trans, useTranslation } from 'react-i18next'
import classes from '../Credits.module.css'

const SectionSeparator = (props) => {
    const [t] = useTranslation("credits")
    return (
        <div className={classes.sectionSeparator}>
            <h1 className={classes.sectionSeparatorTitle}>
                <Trans t={t}>
                    {props.title}
                </Trans>
            </h1>
        </div>
    )
}

export default SectionSeparator