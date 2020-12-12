import React from 'react';
import { Trans, useTranslation } from 'react-i18next'
import classes from '../Credits.module.css';

const AssetCard = (props) => {
    const [t] = useTranslation("credits")

    return (
        <div className={"card " + classes.pekoraCard}>
            <div className="card-header bg-transparent">
                <Trans t={t}>
                    {props.assetType}
                </Trans>
            </div>
            <div className="card-body">
                {props.assetList.map((asset, index) =>
                    <p key={index}>
                        <a href={asset.url} target="_blank" rel="noreferrer" className="text-decoration-none">
                            <Trans t={t}>
                                {asset.name}
                            </Trans>
                        </a>
                    </p>
                )}
            </div>
        </div>
    )

}

export default AssetCard