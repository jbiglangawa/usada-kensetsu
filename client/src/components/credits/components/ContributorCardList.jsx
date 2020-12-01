import React from 'react';
import ContributorCard from './ContributorCard';

const ContributorCardList = (props) => {

    return (
        <div className="container-fluid pb-3">
            <div className="d-flex justify-content-around align-items-center flex-wrap">
                {props.contributors.map((contributor, index) =>
                    <ContributorCard
                        key={index}
                        {...contributor}
                    />
                )}
            </div>
        </div>
    )

}

export default ContributorCardList