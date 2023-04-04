import InfluenceTrack from "./InfluenceTrack/InfluenceTrack";
import BoardSpaces from "./BoardSpaces/BoardSpaces";

export default function BeneGesserit({game, setGame}) {
    return (
        <>
            <div className="beneGesserit">
                <h2>Bene Gesserit</h2>
                <InfluenceTrack />
                <BoardSpaces game={game} setGame={setGame}/>
            </div>
        </>
    )
}