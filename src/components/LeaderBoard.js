import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, orderBy, firestore } from "firebase/firestore"
import IndiLeaderBoard from "./LeaderBoardHelper.js/indiLeader";
import styled from "styled-components";
import UniverseImage from "../img/icon/universe_113icon.png";
import loc_narImage from "../img/icon/loc-naricon.png";
import AnimeImage from "../img/board/anime.jpg"

const ImageHolder = styled.div`      
    display: grid;      
    grid-template-columns: 1fr 1fr 1fr;      
    @media (max-width: 1220px) {      
        grid-template-columns: repeat(auto-fill, minmax(25em, 1fr))      
    }      
`

const Icon = styled.img`      
    padding: 1em;      
    width: 25em;      
    height: 15em;      
    transition: 0.5s;      
    &:hover {      
        scale: 1.1;      
    }      
`

const Heading = styled.h1`      
    text-align: center;      
    background-color: #222;      
    padding: 0.7em;      
`;

const ParaR = styled.span`      
    font-size: 2rem;      
    font-weight: 600;      
    color: red;      
`;

const ParaB = styled.span`      
    font-size: 2rem;      
    font-weight: 600;      
    color: white;      
`;

const LeaderBoard = () => {
    const [anime, setAnime] = useState([]);
    const [loc_nar, setLoc_nar] = useState([]);
    const [Universe113, setUniverse113] = useState([]);

    const Anime_LeaderBoard = collection(db, "anime_LeaderBoard");
    const Loc_Nar_LeaderBoard = collection(db, "loc_nar_LeaderBoard");
    const Universe113_LeaderBoard = collection(db, "universe_113_LeaderBoard");
    const [showAnime, setShowAnime] = useState(true);
    const [showLoc_Nar, setShowLoc_Nar] = useState(false);
    const [showUniverse, setShowUniverse] = useState(false);

    const changeLeaderBoard = (e) => {
        const name = e.target.dataset.name;
        switch (name) {
            case "anime":
                setShowAnime(true);
                setShowLoc_Nar(false);
                setShowUniverse(false);
                break;
            case "universe113":
                setShowAnime(false);
                setShowLoc_Nar(false);
                setShowUniverse(true);
                break;
            case "loc_nar":
                setShowAnime(false);
                setShowLoc_Nar(true);
                setShowUniverse(false);
                break;
        }
    }

    useEffect(() => {
        const getBoard = async (name, set) => {
            const data = await getDocs(name);
            // const data = await db.firestore().collection(name)
            //     .orderBy("Time", "asc")
            set(data.docs.map((doc) => ({ ...doc.data(), found: false })));
        }
        getBoard(Anime_LeaderBoard, setAnime);
        getBoard(Loc_Nar_LeaderBoard, setLoc_nar);
        getBoard(Universe113_LeaderBoard, setUniverse113);
    }, [])

    return (
        <div>
            <Heading><ParaR>Leaders </ParaR><ParaB>Board</ParaB></Heading>
            <ImageHolder>
                <Icon src={AnimeImage} data-name="anime" onClick={changeLeaderBoard} />
                <Icon src={UniverseImage} data-name="universe113" onClick={changeLeaderBoard} />
                <Icon src={loc_narImage} data-name="loc_nar" onClick={changeLeaderBoard} />
            </ImageHolder>
            {showAnime && (
                <IndiLeaderBoard board={anime} name="Anime Leaders-Board" />
            )}
            {showLoc_Nar && (
                <IndiLeaderBoard board={loc_nar} name="Loc Nar Leaders-Board" />
            )}
            {showUniverse && (
                <IndiLeaderBoard board={Universe113} name="Universe-113 Leaders-Board" />
            )}
        </div>
    )
}

export default LeaderBoard;      