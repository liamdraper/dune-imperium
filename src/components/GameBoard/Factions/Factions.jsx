import Emperor from "./Emperor/Emperor";
import SpacingGuild from "./SpacingGuild/SpacingGuild";
import BeneGesserit from "./BeneGesserit/BeneGessiret";
import Fremen from "./Fremen/Fremen";
import "./Factions.css"

export default function Factions({game, setGame}) {
    return (
        <>  
            <div className="factions">
                <Emperor game={game} setGame={setGame}/>
                <SpacingGuild game={game} setGame={setGame}/>
                <BeneGesserit game={game} setGame={setGame}/>
                <Fremen game={game} setGame={setGame}/>
            </div>
        </>
    )
}