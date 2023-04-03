import InfluenceTrack from "./InfluenceTrack/InfluenceTrack";
import BoardSpaces from "./BoardSpaces/BoardSpaces";

export default function Fremen() {
    return (
        <>
            <div className="fremen">
                <h2>Fremen</h2>
                <InfluenceTrack />
                <BoardSpaces />
            </div>
        </>
    )
}