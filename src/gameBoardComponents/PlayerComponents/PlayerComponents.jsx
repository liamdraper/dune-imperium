import PlayerPieces from "./PlayerPieces/PlayerPieces";
import PlayerDeck from "./PlayerDeck/PlayerDeck";
import "./PlayerComponents.css";
import { useEffect } from "react";

export default function PlayerComponenets({game, player}) {

    useEffect(() => {
        const boardEls = document.querySelectorAll('#location');
        console.log(boardEls)
        // boardEls.forEach((e) => e.style.backgroundColor = 'blue')
    }, [])

    function handlePlaceAgent() {
        const boardEls = document.querySelectorAll('#location');
        boardEls.forEach((e) => e.style.backgroundColor = 'blue')
        const avail = game.boardLocations.filter((l) => l.taken == false);
        console.log(avail);
    }


    return (
        <>
            <div className="player">
                <h2>My stuff</h2>
                    // On button click, player can place an agent on the board on any avaiable locations
                    <button onClick={handlePlaceAgent}>Place Agent</button>
                    <PlayerPieces />
                <PlayerDeck player={player}/>
            </div>
        </>
    )
}