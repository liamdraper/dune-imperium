import InfluenceTrack from "./InfluenceTrack/InfluenceTrack";
import BoardSpaces from "./BoardSpaces/BoardSpaces";

export default function Fremen({game, setGame}) {
    return (
        <>
            <div className="fremen">
                <h2>Fremen</h2>
                <InfluenceTrack />
                <BoardSpaces game={game} setGame={setGame}/>
            </div>
        </>
    )
}