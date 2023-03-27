import SietchTabr from "./SietchTabr/SietchTabr";
import ResearchStation from "./ResearchStation/ResearchStation";
import Carthag from "./Carthag/Carthag";
import Arrakeen from "./Arakeen/Arakeen";
import "./Cities.css"

export default function Cities() {
    return (
        <>
            <div className="cities">
                <h2>Cities</h2>
                <SietchTabr />
                <ResearchStation />
                <Carthag />
                <Arrakeen />
            </div>
        </>
    )
}