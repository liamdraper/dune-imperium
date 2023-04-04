import "./Arrakeen.css";
import { useState, useEffect } from "react";

export default function Arrakeen({game, setGame}) {

    const [taken, setTaken] = useState(null);

    console.log(game)

    function handleClick() {
        setTaken(!taken);
        const newGameData = game;
        newGameData.boardLocations[8].taken = !taken;
        setGame(newGameData);
    }

    return (
        <>
            <div>
                <h3>Arrakeen</h3>
            </div>
        </>
    )
}