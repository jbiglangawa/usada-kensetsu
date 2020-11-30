import React from 'react';
import ContributorCardList from '../components/ContributorCardList';
import SubsectionHeader from '../components/SubsectionHeader';

export default class Artist_section extends React.Component {

    render() {
        return (
            <>
                <SubsectionHeader
                    title="Artists"
                    subtitle="Thank you for the following artists who have given me permission to use their art. Please do give them a visit"
                />
                <ContributorCardList
                    contributors={[
                        {
                            name: "SwingSpringer",
                            mainSocialUsername: "@SwingSpringer",
                            mainSocialLink: "#",
                            specialThanks: "{{ Specific Thanks }}",
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
                            specialThanks: "{{ Specific Thanks }}",
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
                            specialThanks: "{{ Specific Thanks }}",
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
                            specialThanks: "{{ Specific Thanks }}",
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
                            specialThanks: "{{ Specific Thanks }}",
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