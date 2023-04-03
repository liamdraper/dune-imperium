import "./GameBoard.css";
import Factions from "./Factions/Factions";
import LandsraadCouncil from "./LandsraadCouncil/LandsraadCouncil";
import Cities from "./Cities/Cities";
import Deserts from "./Deserts/Deserts";
import Conflict from "./Conflict/Conflict";
import CHOAM from "./CHOAM/CHOAM";
import ScoreTrack from "./ScoreTrack/ScoreTrack";

export default function GameBoard({player, setPlayer}) {
    return(
        <>
            <div className="gameBoardGrid">
                <Factions />
                <LandsraadCouncil />
                <Cities />
                <Deserts />
                <Conflict />
                <CHOAM />
                <ScoreTrack player={player} setPlayer={setPlayer}/>
            </div>
        </>
    )
}