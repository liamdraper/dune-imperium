import Modal from "../../components/Modal/Modal";
import Decks from "../../gameComponenets/Decks/Decks";
import LandsraadCouncil from "../../gameComponenets/LandsraadCouncil/LandsraadCouncil";
import CHOAM from "../../gameComponenets/CHOAM/CHOAM";
import Factions from "../../gameComponenets/Factions/Factions";
import Cities from "../../gameComponenets/Cities/Cities";
import Deserts from "../../gameComponenets/Deserts/Deserts";
import Combat from "../../gameComponenets/Combat/Combat";
import ScoreTrack from "../../gameComponenets/ScoreTrack/ScoreTrack";
import RivalComponenets from "../../gameComponenets/RivalComponents/RivalComponents";
import PlayerComponenets from "../../gameComponenets/PlayerComponents/PlayerComponents";
import "./GamePage.css";

export default function GamePage() {
    return (
        <>
            <h1>Game</h1>
            <Modal />
            <div className="board">
                <Decks />
                <LandsraadCouncil />
                <CHOAM />
                <Factions />
                <Cities />
                <Deserts />
                <Combat />
                <ScoreTrack />
                <RivalComponenets />
                <PlayerComponenets />
            </div>
        </>
    )
}