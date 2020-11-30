import React from 'react';
import ContributorCardList from '../components/ContributorCardList';
import SubsectionHeader from '../components/SubsectionHeader';

export default class TranslatorsSection extends React.Component {

    render() {
        return (
            <>
                <SubsectionHeader
                    title="Translators"
                    subtitle="{{ General Translators Description Here }}"
                />
                <ContributorCardList
                    contributors={[
                        {
                            name: "SwingSpringer",
                            mainSocialUsername: "@SwingSpringer",
                            mainSocialLink: "#",
                            links: {
                                twitter: "#",
                                youtube: "#",
                                pixiv: "#",
                                discord: "#",
                                facebook: "#",
                                deviantart: "#"
                            }
                        },
                        {
                            name: "SwingSpringer",
                            mainSocialUsername: "@SwingSpringer",
                            mainSocialLink: "#",
                            links: {
                                twitter: "#",
                                youtube: "#",
                                pixiv: "#",
                                discord: "#",
                                facebook: "#",
                                deviantart: "#"
                            }
                        },
                        {
                            name: "SwingSpringer",
                            mainSocialUsername: "@SwingSpringer",
                            mainSocialLink: "#",
                            links: {
                                twitter: "#",
                                youtube: "#",
                                pixiv: "#",
                                discord: "#",
                                facebook: "#",
                                deviantart: "#"
                            }
                        },
                        {
                            name: "SwingSpringer",
                            mainSocialUsername: "@SwingSpringer",
                            mainSocialLink: "#",
                            links: {
                                twitter: "#",
                                youtube: "#",
                                pixiv: "#",
                                discord: "#",
                                facebook: "#",
                                deviantart: "#"
                            }
                        },
                        {
                            name: "SwingSpringer",
                            mainSocialUsername: "@SwingSpringer",
                            mainSocialLink: "#",
                            links: {
                                twitter: "#",
                                youtube: "#",
                                pixiv: "#",
                                discord: "#",
                                facebook: "#",
                                deviantart: "#"
                            }
                        },
                    ]}
                />
            </>
        )
    }
}