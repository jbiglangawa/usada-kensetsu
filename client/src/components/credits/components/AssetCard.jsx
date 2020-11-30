import React from 'react';
import classes from '../Credits.module.css';

export default class AssetCard extends React.Component {

    render() {
        return (
            <div className={"card " + classes.pekoraCard}>
                <div className="card-header bg-transparent">
                    {this.props.assetType}
                </div>
                <div className="card-body">
                    {this.props.assetList.map((asset, index) =>
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
}