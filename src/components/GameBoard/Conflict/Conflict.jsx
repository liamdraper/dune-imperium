import ConflictDeck from "./ConflictDeck/ConflictDeck";
import CombatField from "./CombatField/CombatField";
import CombatTrack from "./CombatTrack/CombatTrack";
import "./Conflict.css"

export default function Conflict({game}) {
    return (
       <>
            <div className="conflictGrid">
                {/* <h2>Combat</h2>
                <ConflictDeck game={game}/>
                <CombatField />
                <CombatTrack /> */}
            </div>
       </>
    )
}