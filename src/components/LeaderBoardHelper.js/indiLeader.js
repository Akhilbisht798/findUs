import React from "react";
import styled from "styled-components";

const LeaderDivs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const IndiLeaderBoard = (props) => {
    return (
        <div>
            {props.board.map((curr) => {
                return (
                    <LeaderDivs>
                        <p>{curr.name}</p>
                        <p>{curr.Time}</p>
                    </LeaderDivs>
                )
            })}
        </div>
    )
}

export default IndiLeaderBoard;