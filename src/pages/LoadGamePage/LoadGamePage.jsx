import { useState, useEffect } from "react";
import * as gamesAPI from "../../utilities/games-api";
import { Link } from 'react-router-dom';
import "./LoadGamePage.css";
import GameDetails from "../../components/GameDetails/GameDetails";

export default function LoadGamePage({user}) {

    const [games, setGames] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    

    useEffect(() => {
        async function getGames() {
            const gamesList = await gamesAPI.getAllGames();
            setGames(gamesList)
        }
        getGames();
        //bad?
    })

    return(
        <>
            {games.length ? 
            <div className="loadGamePage">
                <ul>
                    {games.filter((game) => game.user === user._id).map((game, index) => <li>
                            <button onClick={() => setSelectedIndex(index)}>{game.name}</button>
                            <GameDetails game={game} index={index} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
                        </li>)}
                </ul>
            </div>
            :
            <div className="loadGamePage"> <p>No games yet...</p></div>
            }
        </>
    )
}
// {games.map((game) => <li><Link to={`/game/${game._id}`}>{game.name}</Link></li>)}