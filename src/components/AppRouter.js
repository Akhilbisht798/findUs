import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anime from "../img/board/anime.jpg";
import Universe113 from "../img/board/universe-113.jpg";
import locNar from "../img/board/the-loc-nar.jpg";
import Home from "./Home";
import Game from "./Game";

const ReactRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/anime" element={<Game photo={Anime} name={"anime"} />} />
                <Route path="/universe_113" element={<Game photo={Universe113} name={"universe_113"}
                />} />
                <Route path="/loc_nar" element={<Game photo={locNar} name={"loc_nar"}
                />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ReactRouter