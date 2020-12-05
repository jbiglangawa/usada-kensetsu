import React from 'react';
import ContributorCardList from '../components/ContributorCardList';
import SubsectionHeader from '../components/SubsectionHeader';
import { translators } from '../CreditsData';

const TranslatorsSection = () => {

    return (
        <>
            <SubsectionHeader
                title="Translators"
                subtitle="People who translated the website to each of their language. Thank you very much for your participation!"
            />
            <ContributorCardList
                contributors={translators}
            />
        </>
    )
}

export default TranslatorsSection