import "./SietchTabr.css";
import { useState, useEffect } from "react";

export default function SietchTabr({game, setGame}) {

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
                <h3>SietchTabr</h3>
            </div>
        </>
    )
}