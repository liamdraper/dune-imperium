import "./PlayerComponents.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import * as gamesAPI from "../../utilities/games-api";
import * as playersAPI from "../../utilities/players-api";

export default function PlayerComponents( {player, setPlayer, game, setGame}) {

    const navigate = useNavigate();
    const [spice, setSpice] = useState(player.spice);
    const [solari, setSolari] = useState(player.solari);
    const [water, setWater] = useState(player.water);
    const [img, setImg] = useState('')

    const savedGame = game;
    const savedPlayer = player;
    console.log('savedPlayer', savedPlayer);

    useEffect(() => {
        async function getImg() {
            const img = await require(`../../card-images/${player.leader.name}-headshot.png`);
            setImg(img);
        }
        getImg();
    }, [])

    async function handleSave() {
        const game = await gamesAPI.saveGame(savedGame);
        console.log('player', savedPlayer)
        const player = await playersAPI.savePlayer(savedPlayer);
        setGame(game);
        setPlayer(player);
    }

    async function handleExit() {
        const game = await gamesAPI.saveGame(savedGame);
        setGame(game);
        navigate('/');
    }

    const [showModal, setShowModal] = useState('none');

    function addSpice() {
        setSpice((spice) => spice += 1);
        const newPlayerData = player;
        newPlayerData.spice += 1;
        setPlayer(newPlayerData);
    }

    function removeSpice() {
        if (spice === 0) return;
        else {
        setSpice((spice) => spice -= 1);
        const newPlayerData = player;
        newPlayerData.spice -= 1;
        setPlayer(newPlayerData);
        }
    }

    function addSolari() {
        setSolari((solari) => solari += 1);
        const newPlayerData = player;
        console.log(newPlayerData)
        newPlayerData.solari += 1;
        setPlayer(newPlayerData);
        console.log(newPlayerData)
    }

    function removeSolari() {
        if (solari === 0) return;
        else {
        setSolari((solari) => solari -= 1);
        const newPlayerData = player;
        newPlayerData.solari -= 1;
        setPlayer(newPlayerData);
        }
    }

    function addWater() {
        setWater((water) => water += 1);
        const newPlayerData = player;
        newPlayerData.water += 1;
        setPlayer(newPlayerData);
    }

    function removeWater() {
        if (water === 0) return;
        else {
        setWater((water) => water -= 1);
        const newPlayerData = player;
        newPlayerData.water -= 1;
        setPlayer(newPlayerData);
        }
    }



    return(
        <>
            <div className="playerComponents">
                <button onClick={() => setShowModal('inline')} className="hand">HAND</button>
                <div className="resourceCounter">
                    <BsFillArrowUpCircleFill onClick={addSpice}/>
                    <BsFillArrowDownCircleFill onClick={removeSpice}/>
                </div>
                <div>Spice: {spice}</div>
                <br />
                <div className="resourceCounter">
                    <BsFillArrowUpCircleFill onClick={addSolari}/>
                    <BsFillArrowDownCircleFill onClick={removeSolari}/>
                </div>
                <div>Solari: {solari}</div>
                <br />
                <div className="resourceCounter">
                    <BsFillArrowUpCircleFill onClick={addWater}/>
                    <BsFillArrowDownCircleFill onClick={removeWater}/>
                </div>
                <div>Water: {water}</div>
                <img style={{border: `.5vmin solid ${player.color}`}} className="leaderPic" src={img} alt="" />
                <button onClick={handleSave}>SAVE</button>
                <button onClick={handleExit}>SAVE & EXIT</button>
                <div style={{display:showModal}} className="deck-modal">
                    <button onClick={() => setShowModal('none')} className="modalClose">X</button>
                    <ul>{player.hand.map((card, index) => <Card key={index} card={card} game={game}/>)}</ul>
                </div>
            </div>
        </>
    )
}