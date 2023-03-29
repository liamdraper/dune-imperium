import PlayerPieces from "./PlayerPieces/PlayerPieces";
import PlayerDeck from "./PlayerDeck/PlayerDeck";
import "./PlayerComponents.css";
import { useEffect } from "react";

export default function PlayerComponenets({game, player}) {


    function handlePlaceAgent() {
        const boardEls = document.querySelectorAll('#location');
        const boardNameEls = document.querySelectorAll('#location-name');
        console.log(boardNameEls);
        boardEls.forEach((e) => e.style.borderColor = 'red');
        const avail = game.boardLocations.filter((l) => l.taken == false);
        console.log(avail)
        console.log(boardNameEls[0].textContent);
        // const availSquares = boardNameEls.filter((el) => avail.includes(el.textContent) )
        console.log(boardEls, avail);
    }

    return (
        <>
            <div className="player">
                <h2>My stuff</h2>
                    <button onClick={handlePlaceAgent}>Place Agent</button>
                    <PlayerPieces />
                <PlayerDeck player={player}/>
            </div>
        </>
    )
}