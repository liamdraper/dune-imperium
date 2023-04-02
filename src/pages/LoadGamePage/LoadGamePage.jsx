import { useState, useEffect } from "react";
import * as gamesAPI from "../../utilities/games-api";
import { Link } from 'react-router-dom';
import "./LoadGamePage.css";

export default function LoadGamePage() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        async function getGames() {
            const gamesList = await gamesAPI.getAllGames();
            setGames(gamesList)
        }
        getGames();
    }, [])

    function handleClick() {
        
    }

    return(
        <>
            <div className="loadGamePage">
                <ul>
                    {games.map((game) => <li><button onClick={handleClick}>{game.name}</button></li>)}
                </ul>
                {/* <div className=""></div> */}
            </div>
        </>
    )
}
// {games.map((game) => <li><Link to={`/game/${game._id}`}>{game.name}</Link></li>)}