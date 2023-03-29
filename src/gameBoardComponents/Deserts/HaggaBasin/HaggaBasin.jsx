import "./HaggaBasin.css";
import { useState } from "react";

export default function HaggaBasin({game, setGame, player, setPlayer}) {

    const [occupied, setOccupied] = useState('white');
    

    function handleClick() {
        if (game.boardLocations[20].taken === false) {
            const updatedGame = {...game};
            // Update board space to true (taken)
            updatedGame.boardLocations[20].taken = true;
            // const updatedPlayer = {...player};
            // updatedPlayer.water
            // Apply cost
            setPlayer(...player, player.water -= 1);
            setGame(updatedGame);
            // Set background color
            setOccupied('green');
        }
    }

    return (
        <>
            <h3 id={"location-name"}>Hagga Basin</h3>
            <div id="location" onClick={handleClick} style={{backgroundColor: occupied}}></div>
            {/* <button id="location" onClick={handleClick}>
                <h3 id={"location-name"}>Hagga Basin</h3>
            </button> */}
        </>
    )
}