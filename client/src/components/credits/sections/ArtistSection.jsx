import React from 'react';
import ContributorCardList from '../components/ContributorCardList';
import SubsectionHeader from '../components/SubsectionHeader';
import { artists } from '../CreditsData';

const ArtistSection = () => {
    return (
        <>
            <SubsectionHeader
                title="Artists"
                subtitle="Thank you for the following artists who have given me permission to use their art. Please do give them a visit"
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