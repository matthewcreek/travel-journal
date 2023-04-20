import React from "react";

import pin from '../images/Pin-location.png'

function Card(props) {
    return (
        <div className="card">
            <img className="card--photo" src={props.locationPhoto}/>
            <div className="card--info">
                <div className="card--country">
                    <img className="card--pin" src={pin}/>
                    <h4>{props.country}</h4>
                </div>
                <h1>{props.locationName}</h1>
                <p>{props.date}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;