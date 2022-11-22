import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase-config";
import { addDoc, collection } from "firebase/firestore";

const AddPlayer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    color: black;
    width: 30%;
    height: 40%;
`

const AddLeaderBoard = (props) => {

    const [playerName, setPlayerName] = useState("");

    const leaderBoard = collection(db, props.map)

    const AddToLeaderBoard = async () => {
        await addDoc(leaderBoard, { name: playerName, Time: props.Time })
    }

    return (
        <AddPlayer>
            <input type="text" placeholder="Enter Your Name" required
                onChange={(e) => setPlayerName(e.target.value)} />
            <div>Your Record: {props.Time}</div>
            <button onClick={AddToLeaderBoard}>Submit</button>
        </AddPlayer>
    )
}
// orderBy('Score', 'desc')
export default AddLeaderBoard;