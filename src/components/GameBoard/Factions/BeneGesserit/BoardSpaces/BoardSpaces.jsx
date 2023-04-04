import SelectiveBreeding from "./SelectiveBreeding/SelectiveBreeding";
import Secrets from "./Secrets/Secrets";

export default function BoardSpaces({game, setGame}) {
    return (
        <>
            <div className="boardSpaces">
                <SelectiveBreeding game={game} setGame={setGame}/>
                <Secrets game={game} setGame={setGame}/>
            </div>
        </>
    )
}