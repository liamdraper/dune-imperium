import SietchTabr from "./SietchTabr/SietchTabr";
import ResearchStation from "./ResearchStation/ResearchStation";
import Carthag from "./Carthag/Carthag";
import Arrakeen from "./Arakeen/Arakeen";
import "./Cities.css"

export default function Cities({game, setGame}) {
    return (
        <>
            <div className="citiesLocations">
                    <SietchTabr game={game} setGame={setGame}/>
                    <ResearchStation game={game} setGame={setGame}/>
                    <Carthag game={game} setGame={setGame}/>
                    <Arrakeen game={game} setGame={setGame}/>
            </div>
        </>
    )
}