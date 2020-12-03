import React from 'react';
import ContributorCardList from '../components/ContributorCardList';
import SubsectionHeader from '../components/SubsectionHeader';
import { translators } from '../CreditsData';

const TranslatorsSection = () => {

    return (
        <>
            <SubsectionHeader
                title="Translators"
                subtitle="{{ General Translators Description Here }}"
            />
            <ContributorCardList
                contributors={translators}
            />
        </>
    )
}

export default TranslatorsSection