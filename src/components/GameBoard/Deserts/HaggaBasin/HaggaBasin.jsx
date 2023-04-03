import "./HaggaBasin.css";
import { useState, useEffect, useRef } from "react";

export default function HaggaBasin({game, setGame, player, setPlayer, availSpaces}) {

    const div = useRef();
    const [occupied, setOccupied] = useState('white');

    useEffect(() => {
        if (availSpaces && availSpaces.toString().includes('The Great Flat')) {
            div.current.className="highlightBoardSpace";
        }
        else div.current.className=""
    }, [availSpaces])
    

    function handleClick() {
        // Can only send agent if requirements are met
        if (game.boardLocations[20].taken === false && player.water >= 1) {
            // Update board space to true (taken)
            const updatedGame = {...game};
            updatedGame.boardLocations[20].taken = true;
            setGame(updatedGame);
            // // Apply cost
            const updatedPlayer = {...player};
            updatedPlayer.water -= 1;
            console.log(updatedPlayer)
            setPlayer(updatedPlayer, () => console.log(player));
            // Set background color
            setOccupied('green');
            // Gain resources for going here
            player.spice += 2;
            // Add accumulated spice from board
            // player.spice += board.boardLocations[20].spice
            //board.boardLocations[20] = 0
        }
    }

    return (
        <>
            <h3 id={"location-name"}>Hagga Basin</h3>
            <div ref={div} onClick={handleClick} style={{backgroundColor: occupied}}></div>
            {/* Give player option to go to combat space */}
            {/* <button>Crossed swords</button> */}
        </>
    )
}