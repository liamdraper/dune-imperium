import InfluenceTrack from "./InfluenceTrack/InfluenceTrack";
import BoardSpaces from "./BoardSpaces/BoardSpaces";
import "./Emperor.css";

export default function Emperor() {
    return (
        <>
            <div className="emperor">
                <h2>Emperor</h2>
                <InfluenceTrack />
                <BoardSpaces />
            </div>
        </>
    )
}