import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddLeaderBoard from "./AddPlayer";
import Timer from "./timer";
//TODO: Add player record in records.

const GameHeaderDiv = styled.div`
    position: sticky;
    top: 0;
    background-color: #222;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
`;

const ImageDiv = styled.img`
    width:6.25em;
    height:6.25em;
    transition: 0.4s;
    @media (max-width: 396px) {
        width: 50px; 
        height: 50px;
    }
  }
`;

const OuterImageDiv = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
`;

const Linker = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
`;

const Para = styled.p`
  text-align: center;
`;

const GameHeader = (props) => {

    const [timeTaken, setTimeTaken] = useState("");

    const SetTimeTaken = (val) => {
        setTimeTaken(val);
    }

    return (
        <GameHeaderDiv>
            <div><Linker href="/">Home</Linker></div>
            <Timer gameOver={props.gameOver} setTime={SetTimeTaken} />
            <OuterImageDiv>
                {props.charecter.map((curr) => {
                    return (
                        <div>
                            <ImageDiv src={curr.img} />
                            <Para>{curr.name}</Para>
                        </div>
                    )
                })}
            </OuterImageDiv>
            {props.gameOver && (
                <AddLeaderBoard map={props.map + "_LeaderBoard"} Time={timeTaken} changeGameOver={props.changeGameOver} />
            )}
        </GameHeaderDiv>
    )
}

export default GameHeader;