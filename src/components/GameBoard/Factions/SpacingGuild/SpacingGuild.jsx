import InfluenceTrack from "./InfluenceTrack/InfluenceTrack";
import BoardSpaces from "./BoardSpaces/BoardSpaces";

export default function SpacingGuild() {
    return (
        <>
            <div className="spacingGuild">
                <h2>Spacing Guild</h2>
                <InfluenceTrack />
                <BoardSpaces />
            </div>
        </>
    )
}