import InfluenceTrack from "./InfluenceTrack/InfluenceTrack";
import BoardSpaces from "./BoardSpaces/BoardSpaces";
import "./Emperor.css";

export default function Emperor({game, setGame}) {
    return (
        <>
            <div className="emperor">
                <h2>Emperor</h2>
                <InfluenceTrack />
                <BoardSpaces game={game} setGame={setGame}/>
            </div>
        </>
    )
}