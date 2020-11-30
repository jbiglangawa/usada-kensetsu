import React from "react";

export default class Section_separator extends React.Component {

    render() {
        return (
            <div className="w-100 d-flex justify-content-center align-items-center" style={{ height: "30vh", backgroundColor: "#F9F9F9" }}>
                <h1 style={{ fontFamily: 'AutoBusBold, Segoe UI', fontWeight: "bold", fontSize: "3em", color: "#54B7E9" }}>
                    {this.props.title}
                </h1>
            </div>
        )
    }

}