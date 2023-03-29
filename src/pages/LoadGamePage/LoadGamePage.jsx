import { useState, useEffect } from "react";
import * as gamesAPI from "../../utilities/games-api";
import { Link } from 'react-router-dom';

export default function LoadGamePage() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        async function getGames() {
            const gamesList = await gamesAPI.getAllGames();
            setGames(gamesList)
        }
        getGames();
    }, [])

    return(
        <>
            <ul>
                {games.map((game) => <li><Link to={`/game/${game._id}`}>{game.name}</Link></li>)}
            </ul>
        </>
    )
}