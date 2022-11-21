import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ShowDate = styled.p`
    font-size: 2rem;
`;

const Timer = () => {

    const [seconds, setSeconds] = useState(() => 0);

    const CheckFormat = (num) => {
        return num > 9 ? num : "0" + num;
    }

    const formatDate = () => {
        let Hours = Math.floor(seconds / 3600);
        let Min = Math.floor((seconds / 60) % 60);
        let Sec = Math.floor(seconds % 60);
        Hours = CheckFormat(Hours);
        Min = CheckFormat(Min);
        Sec = CheckFormat(Sec);
        return Hours + ": " + Min + ": " + Sec;
    }

    useEffect(() => {
        setTimeout(() => {
            setSeconds(seconds + 1);
        }, 1000)
    })

    return (
        <div>
            <ShowDate>{formatDate()}</ShowDate>
        </div>
    )
}

export default Timer;