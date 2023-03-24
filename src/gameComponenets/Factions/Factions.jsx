import Emperor from "./Emperor/Emperor";
import SpacingGuild from "./SpacingGuild/SpacingGuild";
import BeneGesserit from "./BeneGesserit/BeneGessiret";
import Fremen from "./Fremen/Fremen";
import "./Factions.css"

export default function Factions() {
    return (
        <>  
            <div className={"factions"}>
                <h2>Factions</h2>
                <Emperor />
                <SpacingGuild />
                <BeneGesserit />
                <Fremen />
            </div>
        </>
    )
}