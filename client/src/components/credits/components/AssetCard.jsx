import React from 'react';

export default class AssetCard extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="card" style={{ borderColor: "#0A84F1" }}>
                <div className="card-header bg-transparent">
                    {this.props.assetType}
                </div>
                <div className="card-body">
                    {this.props.assetList.map((asset) =>
                        <p>
                            <a href={asset.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                                {asset.name}
                            </a>
                        </p>
                    )}
                </div>
            </div>
        )
    }
}