import React from "react";

import Card from './Card';
import cardData from '../data';

//photos
import canyon from '../images/grand-canyon.jpg';
import akiha from '../images/akiha.jpg';
import bong from '../images/bong.jpg';

function Main() {
    const imgArr = [canyon,akiha,bong]
    const cardElements = cardData.map((card, index) => {
        return (
            <Card
                locationPhoto = {imgArr[index]}
                key = {card.id}
                {...card}
            />
        )
    })
    return (
        <div className="main">
            {cardElements}
        </div>
    )
}

export default Main;