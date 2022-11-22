import React from "react";
import styled from "styled-components";

const Head = styled.div`
    background-color: #222;
    padding: 1.5em;
    margin-bottom: 1.3em;
    display: flex;
    align-items: center;
    justify-content: center;
    postion: sticky; 
    top: 0;
`

const ParaB = styled.span`
    font-size: 2rem;
    font-weight: 600;
`;

const ParaR = styled.span`
    font-size: 2rem;
    font-weight: 600;
    color: red;
`;

const Heading = styled.h1`
    color: white;
`

const Header = () => {
    return (
        <Head>
            <Heading><ParaR>Find</ParaR><ParaB> Us</ParaB></Heading>
        </Head>
    )
}

export default Header;