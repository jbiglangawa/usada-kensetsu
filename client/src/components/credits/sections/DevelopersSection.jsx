import React from 'react';
import ContributorCardList from '../components/ContributorCardList';
import SubsectionHeader from '../components/SubsectionHeader';

const DevelopersSection = () => {

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

export default DevelopersSection