import Heighliner from "./Heighliner/Heighliner";
import Foldspace from "./Foldspace/Foldspace";

export default function BoardSpaces({game, setGame}) {
    return (
        <>
            <div className="boardSpaces">
                <Heighliner game={game} setGame={setGame}/>
                <Foldspace game={game} setGame={setGame}/>
            </div>
        </>
    )
}