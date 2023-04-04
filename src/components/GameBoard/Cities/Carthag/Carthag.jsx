import "./Carthag.css";
import { useState, useEffect } from "react";

export default function Carthag({game, setGame}) {

    const [taken, setTaken] = useState(null);

    function handleClick() {
        setTaken(!taken);
        const newGameData = game;
        newGameData.boardLocations[8].taken = !taken;
        setGame(newGameData);
    }

    return (
        <>
            <div>
                <h3>Carthag</h3>
            </div>
        </>
    )
}