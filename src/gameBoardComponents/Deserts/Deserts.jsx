import TheGreatFlat from "./TheGreatFlat/TheGreatFlat";
import HaggaBasin from "./HaggaBasin/HaggaBasin";
import ImperialBasin from "./ImperialBasin/ImperialBasin";
import "./Deserts.css"

export default function Deserts() {
    return (
        <>
            <div className="deserts">
                <h2>Deserts</h2>
                <div className={"desert-locations"}>
                    <TheGreatFlat />
                    <HaggaBasin />
                    <ImperialBasin />
                </div>
            </div>
        </>
    )
}