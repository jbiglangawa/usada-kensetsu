import React from 'react';
import ContributorCardList from '../components/ContributorCardList';
import SubsectionHeader from '../components/SubsectionHeader';
import { artists } from '../CreditsData';

const ArtistSection = () => {
    return (
        <>
            <SubsectionHeader
                title="Artists"
                subtitle="The following people has contributed to making the website beautiful. Thank you very much for your participation!"
            />
            <ContributorCardList
                contributors={artists}
            />
            <div className="w-100">
                <hr />
            </div>
        </>
    )
}

export default ArtistSection