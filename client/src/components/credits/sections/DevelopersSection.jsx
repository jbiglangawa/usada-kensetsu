import React from 'react';
import ContributorCardList from '../components/ContributorCardList';
import SubsectionHeader from '../components/SubsectionHeader';
import { developers } from '../CreditsData';

const DevelopersSection = () => {

    return (
        <>
            <SubsectionHeader
                title="Developers"
                subtitle="The following people has committed their free time to improve this website. Thank you very much for your participation!"
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