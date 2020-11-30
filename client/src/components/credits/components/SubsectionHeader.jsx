import React from 'react';

export default class SubsectionHeader extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="container">
                <div className="pt-5 pb-5 d-flex justify-content-center align-items-center flex-column">
                    <h2 className="mb-0" style={{ fontFamily: "Calibri", color: "#54B7E9" }}>
                        {this.props.title}
                    </h2>
                    <div className="mb-1" style={{ height: "3px", width: "100px", backgroundColor: "#E3A453" }}></div>
                    <p style={{fontFamily: "Segoe UI"}} className="text-center">
                        {this.props.subtitle}
                    </p>
                </div>
            </div>
        )
    }
}