import { useState } from "react";

export default function Stillsuits({game, setGame}) {

    const [taken, setTaken] = useState(game.boardLocations[15].taken);

    function handleClick() {
        setTaken(!taken)
        const newGameData = game;
        newGameData.boardLocations[15].taken = !taken;
        setGame(newGameData);
    }

    return (
        <>
            <div className="boardSpace">
                <h3>Stillsuits</h3>
                <div onClick={handleClick} className="agentSpace" style={{backgroundColor: taken ? 'blue' : 'rgb(84, 84, 84)'}}></div>
                <div className="spaceRewards"></div>
            </div>
        </>
    )
}