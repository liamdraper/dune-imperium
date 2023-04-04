import "./GameBoard.css";
import Factions from "./Factions/Factions";
import LandsraadCouncil from "./LandsraadCouncil/LandsraadCouncil";
import Cities from "./Cities/Cities";
import Deserts from "./Deserts/Deserts";
import Conflict from "./Conflict/Conflict";
import CHOAM from "./CHOAM/CHOAM";
import ScoreTrack from "./ScoreTrack/ScoreTrack";

export default function GameBoard({player, setPlayer, game, setGame}) {
    return(
        <>
            <div className="gameBoardGrid">
                <Factions game={game} setGame={setGame}/>
                <LandsraadCouncil game={game} setGame={setGame}/>
                <Cities game={game} setGame={setGame}/>
                <Deserts game={game} setGame={setGame}/>
                <Conflict />
                <CHOAM game={game} setGame={setGame}/>
                <ScoreTrack player={player} setPlayer={setPlayer}/>
            </div>
        </>
    )
}