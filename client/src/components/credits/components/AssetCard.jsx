import React from 'react';
import classes from '../Credits.module.css';

const AssetCard = (props) => {

    return (
        <div className={"card " + classes.pekoraCard}>
            <div className="card-header bg-transparent">
                {props.assetType}
            </div>
            <div className="card-body">
                {props.assetList.map((asset, index) =>
                    <p key={index}>
                        <a href={asset.url} target="_blank" rel="noreferrer" className="text-decoration-none">
                            {asset.name}
                        </a>
                    </p>
                )}
            </div>
        </div>
    )

}

export default AssetCard