import React, { useState, useEffect, useReducer } from "react";
import SelectCharecter from "./GameHelper/SelectCharecter";
import "../style/game.css"
import { db } from "../firebase-config"
import { collection, getDocs } from "firebase/firestore"
import GameHeader from "./GameHelper/GameHeader";

const Game = (props) => {

    const [showSelectChar, setShowSelectChar] = useState(() => false);
    const [dialogPos, setDialog] = useState({});
    const [selectedPos, setSelectedPos] = useState({});
    const [charecterCoords, setCharecterCoords] = useState([]);
    const [forceUpdate, setForceupdate] = useReducer(x => x + 1, 0)
    const [gameOver, setGameOver] = useState(false);
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
        setForceupdate();
    }

    const showDialogBox = () => {
        setShowSelectChar(false)
    }

    useEffect(() => {
        const GameOver = () => {
            for (let i = 0; i < charecterCoords.length; i++) {
                if (charecterCoords[i].found === false) {
                    return false;
                }
            }
            return true;
        }
        const Game = GameOver();
        if (Game && charecterCoords.length !== 0) {
            setGameOver(true);
        }

    }, [forceUpdate])

    return (
        <div>
            <GameHeader charecter={props.charecter} gameOver={gameOver} />
            <img src={props.photo} onClick={onClick} className="game-photo" />
            {showSelectChar && (
                <SelectCharecter dialogPos={dialogPos} selectedCoords={selectedPos}
                    charecter={charecterCoords} setCharecter={charecterFound} close={showDialogBox} />
            )}
        </div>
    )
}

export default Game;