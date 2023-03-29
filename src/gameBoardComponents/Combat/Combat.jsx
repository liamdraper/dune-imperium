import ConflictDeck from "./ConflictDeck/ConflictDeck";
import CombatField from "./CombatField/CombatField";
import CombatTrack from "./CombatTrack/CombatTrack";
import "./Combat.css"

export default function Combat({game}) {
    return (
       <>
            <div className="combat">
                <h2>Combat</h2>
                <ConflictDeck game={game}/>
                <CombatField />
                <CombatTrack />
            </div>
       </>
    )
}