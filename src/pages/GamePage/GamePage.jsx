import GameBoard from "../../components/GameBoard/GameBoard";
import Rivals from "../../components/Rivals/Rivals";
import GameCards from "../../components/GameCards/GameCards";
import PlayerComponents from "../../components/PlayerComponents/PlayerComponents";
import "./GamePage.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as gamesAPI from "../../utilities/games-api";
import * as playersAPI from "../../utilities/players-api";

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
    }, [id]);

    useEffect(() => {
        async function getPlayer() {
            const player = await playersAPI.getPlayer(id);
            setPlayer(player)
        }
        getPlayer();
    }, [id]);

    if (!player || !game) return null;

    return (
        <>
            <div className="gamePageGrid">
                <GameBoard player={player} setPlayer={setPlayer}/>
                <Rivals game={game}/>
                <GameCards />
                <PlayerComponents game={game} setGame={setGame} player={player} setPlayer={setPlayer}/>
            </div>
        </>
    )
}