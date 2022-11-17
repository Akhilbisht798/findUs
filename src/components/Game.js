import React, { useState, useEffect } from "react";
import SelectCharecter from "./GameHelper/SelectCharecter";
import "../style/game.css"

const Game = (props) => {

    const [showSelectChar, setShowSelectChar] = useState(() => false);
    const [dialogPos, setDialog] = useState({});
    const [selectedPos, setSelectedPos] = useState({});

    const getPostion = (e) => {
        const xCoord = Math.round(
            (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
        );
        const yCoord = Math.round(
            (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
        );
        const coords = { xCoord, yCoord };
        return coords;
    };

    const getPostionDialog = (e) => {
        const xCoord = e.clientX;
        const yCoord = e.clientY;
        return { xCoord, yCoord };
    }

    const onClick = (e) => {
        setShowSelectChar(!showSelectChar);
        setDialog(getPostionDialog(e))
        if (!showSelectChar) {
            setSelectedPos(getPostion(e));
        }
    }

    return (
        <div>
            <img src={props.photo} onClick={onClick} className="game-photo" />
            {showSelectChar && (
                <SelectCharecter dialogPos={dialogPos} selected={selectedPos} />
            )}
        </div>
    )
}

export default Game;