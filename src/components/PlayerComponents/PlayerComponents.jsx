import "./PlayerComponents.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import * as gamesAPI from "../../utilities/games-api";

export default function PlayerComponents( {player, setPlayer, game, setGame}) {

    const savedGame = game;
    const navigate = useNavigate();

    async function handleSave() {
        const game = await gamesAPI.saveGame(savedGame);
        setGame(game);
    }

    async function handleExit() {
        const game = await gamesAPI.saveGame(savedGame);
        setGame(game);
        navigate('/');
    }

    const [showModal, setShowModal] = useState('none');

    function handleClick() {
        console.log('game: ', game)
        const asdf = player;
        console.log('player', asdf);
        asdf.spice += 1;
        setPlayer(asdf)
    }

    return(
        <>
            <div className="playerComponents">
                <button onClick={() => setShowModal('inline')} className="hand">HAND</button>
                <div className="resourceCounter">
                    <BsFillArrowUpCircleFill onClick={handleClick}/>
                    <BsFillArrowDownCircleFill />
                </div>
                <div>Spice {player.spice}</div>
                <div>Solari {player.solari}</div>
                <div>Water {player.water}</div>
                <button onClick={handleSave}>SAVE</button>
                <button onClick={handleExit}>SAVE AND EXIT</button>
                <div style={{display:showModal}} className="deck-modal">
                    <button onClick={() => setShowModal('none')}>X</button>
                    <ul>{player.deck.map((card, index) => <Card key={index} card={card} game={game}/>)}</ul>
                </div>
            </div>
        </>
    )
}