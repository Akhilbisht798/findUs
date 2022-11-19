import React, { useState, useEffect } from "react";
import SelectCharecter from "./GameHelper/SelectCharecter";
import "../style/game.css"
import { db } from "../firebase-config"
import { collection, getDocs } from "firebase/firestore"

const Game = (props) => {

    const [showSelectChar, setShowSelectChar] = useState(() => false);
    const [dialogPos, setDialog] = useState({});
    const [selectedPos, setSelectedPos] = useState({});
    const [charecterCoords, setCharecterCoords] = useState([]);
    const Coords = collection(db, props.name);

    useEffect(() => {
        const getCoords = async () => {
            const data = await getDocs(Coords);
            setCharecterCoords(data.docs.map((doc) => ({ ...doc.data(), found: false })));
        }

        getCoords();
    }, []);

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
        setDialog(getPostionDialog(e)); //LATER: Can increase Performance by passing single object instead of 2.
        if (!showSelectChar) setSelectedPos(getPostion(e));
    }

    const charecterFound = (newData) => {
        setCharecterCoords(newData);
    }

    const showDialogBox = () => {
        setShowSelectChar(false)
    }

    return (
        <div>
            <img src={props.photo} onClick={onClick} className="game-photo" />
            {showSelectChar && (
                <SelectCharecter dialogPos={dialogPos} selectedCoords={selectedPos}
                    charecter={charecterCoords} setCharecter={charecterFound} close={showDialogBox} />
            )}
        </div>
    )
}

export default Game;