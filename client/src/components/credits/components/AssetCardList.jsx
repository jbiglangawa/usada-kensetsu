import React from 'react';
import AssetCard from './AssetCard';

const AssetCardList = (props) => {

    return (
        <div className="container pb-5">
            <div className="row">
                {props.assets.map((asset, index) =>
                    <div className="col-md-4" key={index}>
                        <AssetCard
                            {...asset}
                        />
                    </div>
                )}
            </div>
        </div>
    )
    
}

export default AssetCardList