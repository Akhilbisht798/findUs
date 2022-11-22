import React from "react";
import ImageSelector from "./imageSelctor";
import styled from "styled-components";
import Header from "./Header";

const Div = styled.div`
    margin-top: 5em;
    display: flex;
    align-items: center; 
    justify-content: space-around;
    flex-wrap: wrap;
`

const Button = styled.a`
    background-color: rgb(250, 120, 120);
    color: white;
    padding: 15px 25px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
        scale: 1.1;
        background-color: rgb(241, 92, 92);
    }
`;

const ParaB = styled.p`
    font-size: 2rem;
    font-weight: 600;
`;

const ParaR = styled.p`
    font-weight: 600;
    font-size: 2rem;
    color: red;
`

const Home = () => {
    return (
        <>
            <Header />
            <ImageSelector />
            <Div>
                <div>
                    <ParaB>Are you good at Finding</ParaB>
                    <ParaR>Check Leader Board to Find out</ParaR>
                </div>
                <Button href="/LeaderBoard">LeadersBoard</Button>
            </Div>
        </>
    )
}

export default Home;