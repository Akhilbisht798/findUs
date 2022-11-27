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
    border-radius: 7px;
    padding-top: 2em;
`

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5em;
    font-size: 1.5em;
`

const Input = styled.input`
    width: 50%;
    padding: 0.6em;
`;

const Button = styled.button`
    width: 30%;
    height: 3em;
    background: #2f2f2f;
    color: white;
    ont-size: 22px;
    border-radius: 40px;
    text-align: center;
    box-shadow: 0 6px 20px -5px rgba(0,0,0,0.4);
    transition: 0.2s;
    &:hover {
        scale: 1.1;
    }
`

const AddLeaderBoard = (props) => {

    const [playerName, setPlayerName] = useState("");

    const leaderBoard = collection(db, props.map)

    const AddToLeaderBoard = async (e) => {
        e.preventDefault();
        await addDoc(leaderBoard, { name: playerName, Time: props.Time })
        // props.changeGameOver();
        window.location = "/LeaderBoard";
    }

    return (
        <AddPlayer>
            <Form onSubmit={AddToLeaderBoard}>
                <Input type="text" placeholder="Enter Your Name" required
                    onChange={(e) => setPlayerName(e.target.value)} />
                <div>Your Record: {props.Time}</div>
                <Button type="submit">Submit</Button>
            </Form>
        </AddPlayer>
    )
}

export default AddLeaderBoard;