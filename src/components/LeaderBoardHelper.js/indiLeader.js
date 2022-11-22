import React from "react";
import styled from "styled-components";

const LeaderDivs = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
`

const Heading = styled.p`
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 2px;
`

const Para = styled.div`
    text-align: center;
    font-weight: bold;
    padding: 0.5rem;
`


const IndiLeaderBoard = (props) => {
    return (
        <div>
            <LeaderDivs>
                <Heading>Rank</Heading>
                <Heading>Player</Heading>
                <Heading>Time</Heading>
            </LeaderDivs>
            {props.board.map((curr, index) => {
                return (
                    <LeaderDivs key={curr.name + curr.Time}>
                        <Para>{index + 1}</Para>
                        <Para>{curr.name}</Para>
                        <Para>{curr.Time}</Para>
                    </LeaderDivs>
                )
            })}
        </div>
    )
}

export default IndiLeaderBoard;