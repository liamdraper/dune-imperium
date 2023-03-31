import SietchTabr from "./SietchTabr/SietchTabr";
import ResearchStation from "./ResearchStation/ResearchStation";
import Carthag from "./Carthag/Carthag";
import Arrakeen from "./Arakeen/Arakeen";
import "./Cities.css"

export default function Cities({availSpaces}) {
    return (
        <>
            <div className="cities" id="Cities">
                <h2>Cities</h2>
                <div className={"city-locations"}>
                    <SietchTabr />
                    <ResearchStation />
                    <Carthag />
                    <Arrakeen availSpaces={availSpaces}/>
                </div>
            </div>
        </>
    )
}