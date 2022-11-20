import React from "react";
import styled from "styled-components";

//TODO: include a header Section that keeps count of time.
//TODO: include charecter photo and give user feedback if they found the charecter or not
//TODO: Add player record in records.

const GameHeaderDiv = styled.div`
    background-color: #222;
    padding: 0.5em;
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
    &:hover {
        transform: scale(2);
    }   
  }
`;

const OuterImageDiv = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
`;

const GameHeader = (props) => {
    return (
        <GameHeaderDiv>
            <div>Home</div>
            <OuterImageDiv>
                {props.charecter.map((curr) => {
                    return (
                        <div>
                            <ImageDiv src={curr.img} />
                            <p style={{ "text-align": 'center' }}>{curr.name}</p>
                        </div>
                    )
                })}
            </OuterImageDiv>
        </GameHeaderDiv>
    )
}

export default GameHeader;