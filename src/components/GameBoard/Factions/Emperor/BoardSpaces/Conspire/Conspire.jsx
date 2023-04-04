import "./Conspire.css";
import { useState, useEffect } from "react";

export default function Conspire({game, setGame}) {

    const [taken, setTaken] = useState(game.boardLocations[8].taken);

    function handleClick() {
        setTaken(!taken);
        const newGameData = game;
        newGameData.boardLocations[8].taken = !taken;
        setGame(newGameData);
    }

    return (
        <>
            <div className="boardSpace">
                <h3>Conspire</h3>
                <div onClick={handleClick} className="agentSpace" style={{backgroundColor: taken ? 'blue' : 'rgb(84, 84, 84)'}}></div>
                <div className="spaceRewards"></div>
            </div>
        </>
    )
}