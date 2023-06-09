import HighCouncil from "./HighCouncil/HighCouncil";
import HallOfOratory from "./HallOfOratory/HallOfOratory";
import Mentat from "./Mentat/Mentat";
import RallyTroops from "./RallyTroops/RallyTroops";
import Swordmaster from "./Swordmaster/Swordmaster";
import "./LandsraadCouncil.css"

export default function LandsraadCouncil() {
    return (
        <>
            <div className="landsraadCouncilGrid">
                <HighCouncil />
                <HallOfOratory />
                <Mentat />
                <RallyTroops />
                <Swordmaster />
            </div>
        </>
    )
}