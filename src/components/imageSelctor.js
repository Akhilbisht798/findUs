import React from "react";
import "../style/imageSelector.css"

const ImageSelector = () => {
    return (
        <nav className="image-selector-nav">
            <a href="/universe_113"><img src={require("../img/icon/universe_113icon.png")}
                alt="universe" /></a>
            <a href="/anime"><img src={require("../img/board/anime.jpg")}
                alt="img" /></a>
            <a href="/loc_nar"><img src={require("../img/icon/loc-naricon.png")}
                alt="loc-nar" /></a>
        </nav>
    )
}

export default ImageSelector;