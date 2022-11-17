import React, { useState, useEffect } from "react";
import "../style/game.css"

const Game = (props) => {

    const getPostion = (e) => {
        const xCoord = Math.round(
            (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
        );
        const yCoord = Math.round(
            (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
        );
        const coords = { xCoord, yCoord };
        console.log(coords)
        return coords;
    };

    return (
        <div>
            <img src={props.photo} onClick={getPostion} className="game-photo" />
        </div>
    )
}

export default Game;