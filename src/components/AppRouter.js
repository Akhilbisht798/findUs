import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Anime from "../img/anime.jpg";
import Universe113 from "../img/universe-113.jpg";
import Home from "./Home";
import Game from "./Game";

const ReactRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/anime" element={<Game photo={Anime} />} />
                <Route path="/universe_113" element={<Game photo={Universe113} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ReactRouter