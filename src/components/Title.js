import React from "react";

import globe from '../images/globe.png';

function Title() {
    return (
        <div className="title">
            <img className="title--image" src={globe} />
            <h1 className="title--text">my travel journal.</h1>
        </div>
    )
}

export default Title;