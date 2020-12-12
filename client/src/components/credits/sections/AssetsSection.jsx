import React from 'react';
import AssetCardList from '../components/AssetCardList';
import SubsectionHeader from '../components/SubsectionHeader';
import { assets } from '../CreditsData';

const AssetsSection = () => {

    return (
        <>
            <SubsectionHeader
                title="Assets and Resources"
                subtitle="Please refer to this corner for all of the assets used in this website"
            />
            <AssetCardList
                assets={assets}
            />
        </>
    )
}

export default AssetsSection