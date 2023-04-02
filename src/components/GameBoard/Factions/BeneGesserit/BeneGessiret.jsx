import InfluenceTrack from "./InfluenceTrack/InfluenceTrack";
import BoardSpaces from "./BoardSpaces/BoardSpaces";

export default function BeneGesserit() {
    return (
        <>
            <div className="beneGesseritGrid">
                <InfluenceTrack />
                <BoardSpaces />
            </div>
        </>
    )
}