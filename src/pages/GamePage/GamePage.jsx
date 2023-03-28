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
import { useEffect, useState } from "react";
import * as gamesAPI from "../../utilities/games-api";
import * as playersAPI from "../../utilities/players-api";
import { useParams } from "react-router-dom";

export default function GamePage() {
    const [game, setGame] = useState(null);
    const [player, setPlayer] = useState(null);
    const [turn, setTurn] = useState('round-start');
    const { id } = useParams();

    useEffect(() => {
        async function getGame() {
            const game = await gamesAPI.getGame(id);
            setGame(game);
        }
        getGame();
    }, []);

    useEffect(() => {
        async function getPlayer() {
            const player = await playersAPI.getPlayer(id);
            setPlayer(player)
        }
        getPlayer();
    }, []);

    // useEffect(() => {
    //     async function getPlayer() {
    //         const players = await playersAPI.getAllPlayers();
    //         const player = players.find((p) => p._id === id);
    //         console.log(player);
    //         setPlayer(player);
    //     }
    //     getPlayer();
    // }, [id])
    if (!player) return null;
    return (
        <>
            <h1>Turn: {turn}</h1>
            <div className="board">
                <Decks />
                <LandsraadCouncil />
                <CHOAM />
                <Factions />
                <Cities />
                <Deserts />
                <Combat game={game}/>
                <ScoreTrack />
                <RivalComponenets />
                <PlayerComponenets player={player}/>
            </div>
    </>
    )
}