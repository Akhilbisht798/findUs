import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anime from "../img/board/anime.jpg";
import Universe113 from "../img/board/universe-113.jpg";
import locNar from "../img/board/the-loc-nar.jpg";
import Home from "./Home";
import Game from "./Game";
import Bowser from "../img/Charecters/Bowser.png"
import CaptainAmerica from "../img/Charecters/CaptainAmerica.png"
import ChrisGriffin from "../img/Charecters/chrisGriffin.png"
import Doraemon from "../img/Charecters/Doraemon.png"
import finn from "../img/Charecters/finn.png"
import Gyrados from "../img/Charecters/gyrados.png"
import Jake from "../img/Charecters/Jake.png"
import Waldo from "../img/Charecters/waldo.png"
import tommy from "../img/Charecters/tommy.png"

const ReactRouter = () => {

    const UniverseCharecter = [
        { name: "Bowser", img: Bowser },
        { name: "Jake", img: Jake },
        { name: "Waldo", img: Waldo },
    ];

    const loc_nar_Charecter = [
        { name: "Chris Griffin", img: ChrisGriffin },
        { name: "finn", img: finn },
        { name: "Tommy Vercetti", img: tommy },
    ];

    const Anime_Charecter = [
        { name: "Captain America", img: CaptainAmerica },
        { name: "Doraemon", img: Doraemon },
        { name: "gyrados", img: Gyrados },
    ];

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/anime" element={<Game photo={Anime} name={"anime"}
                    charecter={Anime_Charecter} />} />
                <Route path="/universe_113" element={<Game photo={Universe113} name={"universe_113"}
                    charecter={UniverseCharecter} />} />
                <Route path="/loc_nar" element={<Game photo={locNar} name={"loc_nar"}
                    charecter={loc_nar_Charecter} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ReactRouter