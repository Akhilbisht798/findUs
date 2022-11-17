import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import ImageSelector from "./components/imageSelctor";
import Anime from "./img/anime.jpg";
import Universe113 from "./img/universe-113.jpg";
import "./style/app.css"

function App() {

  return (
    <>
      <ImageSelector />
      <BrowserRouter>
        <Routes>
          <Route path="/anime" element={<Game photo={Anime} />} />
          <Route path="/universe_113" element={<Game photo={Universe113} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
