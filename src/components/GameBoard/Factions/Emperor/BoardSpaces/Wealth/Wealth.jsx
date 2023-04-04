import "./Wealth.css";
import { useState } from "react";

export default function Wealth({game, setGame}) {

    const [taken, setTaken] = useState(game.boardLocations[9].taken);

    function handleClick() {
        setTaken(!taken)
        const newGameData = game;
        newGameData.boardLocations[9].taken = !taken;
        setGame(newGameData);
    }
    
    return (
        <>
            <div className="boardSpace">
                <h3>Wealth</h3>
                <div onClick={handleClick} className="agentSpace" style={{backgroundColor: taken ? 'blue' : 'rgb(84, 84, 84)'}}></div>
                <div className="spaceRewards"></div>
            </div>
        </>
    )
}