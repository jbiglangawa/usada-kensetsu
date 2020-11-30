import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai'
import { SiPixiv } from 'react-icons/si'
import { FaDiscord, FaDeviantart, FaFacebook, FaYoutube } from 'react-icons/fa'

import ExternalLink from '../../ExternalLink';

export default class ContributorCard extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="mb-5 d-flex justify-content-center align-items-center">
                <div className="card" style={{ borderColor: "#0A84F1", maxWidth: "250px" }}>
                    <div className="card-body text-center d-flex justify-content-center align-items-center flex-column">
                        <div className="px-4" style={{ maxWidth: "175px" }}>
                            <img
                                src={this.props.avatar_url || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}
                                className="rounded-circle w-100"
                                alt="avatar" />
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-2" style={{ lineHeight: 1.3 }}>
                            <p className="lead m-0">
                                {this.props.name}
                            </p>
                            <small className="font-weight-bold">
                                <a href={this.props.mainSocialLink} style={{ textDecoration: "none" }} target="blank">
                                    {this.props.mainSocialUsername}
                                </a>
                            </small>
                        </div>
                        {this.props.specialThanks &&
                            <div style={{ height: "100px" }}>
                                <p>
                                    {this.props.specialThanks}
                                </p>
                            </div>
                        }
                    </div>
                    {this.props.links &&
                        <div className="card-footer bg-transparent d-flex justify-content-center">
                            {this.props.links.twitter &&
                                <div className="h4 m-0 px-1">
                                    <ExternalLink style={{ color: "#787878" }} href={this.props.links.twitter} excludeIcon><AiOutlineTwitter /></ExternalLink>
                                </div>
                            }
                            {this.props.links.youtube &&
                                <div className="h4 m-0 px-1">
                                    <ExternalLink style={{ color: "#787878" }} href={this.props.links.youtube} excludeIcon><FaYoutube /></ExternalLink>
                                </div>
                            }
                            {this.props.links.discord &&
                                <div className="h4 m-0 px-1">
                                    <ExternalLink style={{ color: "#787878" }} href={this.props.links.discord} excludeIcon><FaDiscord /></ExternalLink>
                                </div>
                            }
                            {this.props.links.deviantart &&
                                <div className="h4 m-0 px-1">
                                    <ExternalLink style={{ color: "#787878" }} href={this.props.links.deviantart} excludeIcon><FaDeviantart /></ExternalLink>
                                </div>
                            }
                            {this.props.links.facebook &&
                                <div className="h4 m-0 px-1">
                                    <ExternalLink style={{ color: "#787878" }} href={this.props.links.facebook} excludeIcon><FaFacebook /></ExternalLink>
                                </div>
                            }
                            {this.props.links.pixiv &&
                                <div className="h4 m-0 px-1">
                                    <ExternalLink style={{ color: "#787878" }} href={this.props.links.pixiv} excludeIcon><SiPixiv /></ExternalLink>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}