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
import Menu from "../../components/GameMenu/GameMenu";

export default function GamePage() {
    const [game, setGame] = useState(null);
    const [player, setPlayer] = useState(null);
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

    //Game Logic

    if (!player || !game) return null;

    //Round Start phase

    // Refactor to setState ??
    if (game.turn === 1.1) {
        // Draw 1st 5 cards from top of deck
        for (let i=0; i<5; i++) {
            if (player.deck.length === 0) {
                // Shuffle discard pile and make it into new deck
                // shuffle(player.discardPile);
                // for (let j=0; j<player.discardPile.length; j++) {
                //     player.deck.push(player.discardPile.pop());
                // }
            }
            player.hand.push(player.deck.pop());
        }
        game.turn = 2;
    }

    // Implementation of Fisher–Yates shuffle
    function shuffle(arr) {
        for (let i=arr.length-1; i>0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    function handleTest() {
        console.log(player);
        setGame({...game, turn: 0.9});
        console.log(player);
    }

    
    return (
        <>
            <button onClick={handleTest}>Test</button>
            {console.log(game)}
            <Menu game={game} player={player}/>
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
                <PlayerComponenets game={game} player={player}/>
            </div>
    </>
    )
}