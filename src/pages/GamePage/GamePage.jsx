import Modal from "../../components/Modal/Modal";
import Decks from "../../gameBoardComponents/Decks/Decks";
import LandsraadCouncil from "../../gameBoardComponents/LandsraadCouncil/LandsraadCouncil";
import CHOAM from "../../gameBoardComponents/CHOAM/CHOAM";
import Factions from "../../gameBoardComponents/Factions/Factions";
import Cities from "../../gameBoardComponents/Cities/Cities";
import Deserts from "../../gameBoardComponents/Deserts/Deserts";
import Combat from "../../gameBoardComponents/Combat/Combat";
import ScoreTrack from "../../gameBoardComponents/ScoreTrack/ScoreTrack";
import RivalComponenets from "../../gameBoardComponents/RivalComponents/RivalComponents";
import PlayerComponenets from "../../gameBoardComponents/PlayerComponents/PlayerComponents";
import "./GamePage.css";
import { useEffect, useState, useRef } from "react";
import * as gamesAPI from "../../utilities/games-api";
import { useParams } from "react-router-dom";

export default function GamePage() {
    const [game, setGame] = useState({});
    const [player, setPlayer] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function getGame() {
            const game = await gamesAPI.getGame(id);
            setGame(game);
        }
        getGame();
    }, []);

    useEffect(() => )

    return (
        <>
            <>
                {/* <h1>Turn: { gameRef.current.turn }</h1> */}
                {console.log(game)}
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
        </>
    )
}