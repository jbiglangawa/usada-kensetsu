import React from 'react';
import ContributorCardList from '../components/ContributorCardList';
import SubsectionHeader from '../components/SubsectionHeader';
import { developers } from '../CreditsData';

const DevelopersSection = () => {

    return (
        <>
            <SubsectionHeader
                title="Developers"
                subtitle="{{ General Developer Description Here }}"
            />
            <ContributorCardList
                contributors={developers}
            />
            <div className="w-100">
                <hr />
            </div>
        </>
    )
}

export default DevelopersSection