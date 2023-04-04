import HardyWarriors from "./HardyWarriors/HardyWarriors";
import Stillsuits from "./Stillsuits/Stillsuits";

export default function BoardSpaces({game, setGame}) {
    return (
        <>
            <div className="boardSpaces">
                <HardyWarriors game={game} setGame={setGame}/>
                <Stillsuits game={game} setGame={setGame}/>
            </div>
        </>
    )
}