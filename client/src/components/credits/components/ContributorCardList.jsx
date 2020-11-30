import React from 'react';
import ContributorCard from './ContributorCard';

export default class ContributorCardList extends React.Component {

    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <div className="container-fluid pb-3">
                <div className="d-flex justify-content-around align-items-center flex-wrap">
                    {this.props.contributors.map((contributor) =>
                        <ContributorCard
                            {...contributor}
                        />
                    )}
                </div>
            </div>
        )
    }
}