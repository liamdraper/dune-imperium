import Conspire from "./Conspire/Conspire";
import Wealth from "./Wealth/Wealth";
import "./BoardSpaces.css";

export default function BoardSpaces({game, setGame}) {
    return (
        <>
            <div className="boardSpaces">
                <Conspire game={game} setGame={setGame}/>
                <Wealth game={game} setGame={setGame}/>
            </div>
        </>
    )
}