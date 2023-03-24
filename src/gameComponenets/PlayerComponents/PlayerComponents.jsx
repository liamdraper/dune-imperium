import PlayerPieces from "./PlayerPieces/PlayerPieces";
import PlayerDeck from "./PlayerDeck/PlayerDeck";
import "./PlayerComponents.css"

export default function PlayerComponenets() {
    return (
        <>
            <div className="player">
                <h2>My stuff</h2>
                <PlayerPieces />
                <PlayerDeck />
            </div>
        </>
    )
}