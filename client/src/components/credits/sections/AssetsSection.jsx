import React from 'react';
import AssetCardList from '../components/AssetCardList';
import SubsectionHeader from '../components/SubsectionHeader';

export default class AssetsSection extends React.Component {

    render() {
        return (
            <>
                <SubsectionHeader
                    title="Assets and Resources"
                    subtitle="Please refer to this corner for all of the assets I've acquired from the internet:"
                />
                <AssetCardList
                    assets={[
                        {
                            assetType: "Fonts",
                            assetList: [
                                {
                                    name: "font-1",
                                    url: "#"
                                },
                                {
                                    name: "font-1",
                                    url: "#"
                                },
                                {
                                    name: "font-1",
                                    url: "#"
                                },
                                {
                                    name: "font-1",
                                    url: "#"
                                },
                            ]
                        },
                        {
                            assetType: "Images",
                            assetList: [
                                {
                                    name: "image-1",
                                    url: "#"
                                },
                                {
                                    name: "image-1",
                                    url: "#"
                                },
                                {
                                    name: "image-1",
                                    url: "#"
                                },
                                {
                                    name: "image-1",
                                    url: "#"
                                },
                            ]
                        },
                        {
                            assetType: "Informations",
                            assetList: [
                                {
                                    name: "info-1",
                                    url: "#"
                                },
                                {
                                    name: "info-1",
                                    url: "#"
                                },
                                {
                                    name: "info-1",
                                    url: "#"
                                },
                                {
                                    name: "info-1",
                                    url: "#"
                                },
                            ]
                        },

                    ]}
                />
            </>
        )
    }
}