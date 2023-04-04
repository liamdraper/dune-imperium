import "./ScoreTrack.css";
import { useState } from "react";

export default function ScoreTrack({player, setPlayer}) {

    const [points, setPoints] = useState(0);

    function handleClick(e) {
        console.log(e.target.value);
        setPoints(e.target.value);
        e.target.style.backgroundColor = 'blue';
        const playerData = player;
        playerData.victoryPoints = points;
        setPlayer(playerData);
    }

    return (
        <>
            <div className="scoreTrackGrid">
                <h2>Score Track</h2>
                <div className="scoreTrack">
                    <div value={12} onClick={handleClick} className="track2">12</div>
                    <div value={11} onClick={handleClick} className="track2">11</div>
                    <div value={10} onClick={handleClick}className="track2">10</div>
                    <div value={9} onClick={handleClick} className="track1">9</div>
                    <div value={8} onClick={handleClick} className="track1">8</div>
                    <div value={7} onClick={handleClick} className="track1">7</div>
                    <div value={6} onClick={handleClick} className="track1">6</div>
                    <div value={5} onClick={handleClick} className="track1">5</div>
                    <div value={4} onClick={handleClick} className="track1">4</div>
                    <div value={3} onClick={handleClick} className="track1">3</div>
                    <div value={2} onClick={handleClick} className="track1">2</div>
                    <div value={1} onClick={handleClick} className="track1">1</div>
                </div>
            </div>
        </>
    )
}