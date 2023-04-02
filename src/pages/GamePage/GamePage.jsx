import GameBoard from "../../components/GameBoard/GameBoard";
import Rivals from "../../components/Rivals/Rivals";
import GameCards from "../../components/GameCards/GameCards";
import PlayerComponents from "../../components/PlayerComponents/PlayerComponents";
import "./GamePage.css"

export default function GamePage() {

    return (
        <>
            <div className="gamePageGrid">
                <GameBoard />
                <Rivals />
                <GameCards />
                <PlayerComponents />
            </div>
        </>
    )
}