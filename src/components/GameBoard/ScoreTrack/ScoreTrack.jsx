import "./ScoreTrack.css"

export default function ScoreTrack({player, setPlayer}) {

    function handleClick(e) {
        const player = player;
        player.victoryPoints = e.target.value;
        setPlayer(player);
    }

    return (
        <>
            <div className="scoreTrackGrid">
                <h2>Score Track</h2>
                <div className="scoreTrack">
                    <div value={12} onClick={handleClick} className="track2">12</div>
                    <div className="track2">11</div>
                    <div className="track2">10</div>
                    <div className="track1">9</div>
                    <div className="track1">8</div>
                    <div className="track1">7</div>
                    <div className="track1">6</div>
                    <div className="track1">5</div>
                    <div className="track1">4</div>
                    <div className="track1">3</div>
                    <div className="track1">2</div>
                    <div className="track1">1</div>
                </div>
            </div>
        </>
    )
}