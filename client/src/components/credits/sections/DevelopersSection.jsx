import React from 'react';
import ContributorCardList from '../components/ContributorCardList';
import SubsectionHeader from '../components/SubsectionHeader';

export default class DevelopersSection extends React.Component {

    render() {
        return (
            <>
                <SubsectionHeader
                    title="Developers"
                    subtitle="{{ General Developer Description Here }}"
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
                <div className="w-100">
                    <hr />
                </div>
            </>
        )
    }
}