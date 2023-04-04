import TheGreatFlat from "./TheGreatFlat/TheGreatFlat";
import HaggaBasin from "./HaggaBasin/HaggaBasin";
import ImperialBasin from "./ImperialBasin/ImperialBasin";
import "./Deserts.css"

export default function Deserts({game, setGame, player, setPlayer, availSpaces}) {
    return (
        <>
            <div className="desertsLocations">
                <TheGreatFlat/>
                <HaggaBasin game={game} setGame={setGame}  player={player} setPlayer={setPlayer}/>
                <ImperialBasin />
            </div>
        </>
    )
}