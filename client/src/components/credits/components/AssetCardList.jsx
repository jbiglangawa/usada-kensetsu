import React from 'react';
import AssetCard from './AssetCard';

export default class AssetCardList extends React.Component {

    render() {
        return (
            <div className="container pb-5">
                <div className="row">
                    {this.props.assets.map((asset) =>
                        <div className="col-md-4">
                            <AssetCard
                                {...asset}
                            />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}