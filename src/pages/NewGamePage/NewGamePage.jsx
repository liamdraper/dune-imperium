import "./NewGamePage.css";
import { leaders } from "../../card-data";
import { starterDeck } from "../../card-data";
import { conflictDeck } from "../../card-data";
import LeaderProfileCard from "../../components/LeaderProfileCard/LeaderProfileCard";
import LeaderCard from "../../components/Modal/LeaderCard/LeaderCard";
import RivalProfileCard from "../../components/RivalProfileCard/RivalProfileCard";
import { useState } from "react";
import { addGame } from "../../utilities/games-api";
import { addPlayer } from "../../utilities/players-api";
import { Link, useNavigate } from 'react-router-dom';
import { IconContext } from "react-icons";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

export default function NewGamePage({user}) {

    const [page, setPage] = useState(1);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [leaderProfile, setLeaderProfile] = useState("");
    const [color, setColor] = useState('red');
    const [rival1, setRival1] = useState(null);
    const [rival2, setRival2] = useState(null);
    const [gameName, setGameName] = useState(`Game ${Math.floor(Math.random() * 9000) + 1000}`);
    const navigate = useNavigate();

    console.log(user)

    async function handleGameStart() {
        const playerData = {
            leader: leaders[selectedIndex],
            color: color,
            victoryPoints: 0,
            spice: 0,
            water: 1,
            solari: 0,
            agent: 2,
            unit: 2,
            persuassion: 0,
            hand: [],
            deck: [starterDeck[0], starterDeck[0], starterDeck[1], starterDeck[1], starterDeck[2], starterDeck[2], starterDeck[3], starterDeck[4], starterDeck[5], starterDeck[6]],
            discardPile: []
        };
        const player = await addPlayer(playerData);
        const gameData = {
            name: gameName, 
            user: user._id,
            turn: 1, 
            player: player._id, 
            rivals: [rival1, rival2],
            conflictDeck: 
            [conflictDeck[0]],
            boardLocations: [ {name: 'High Council', taken: false}, {name: 'Hall Of Oratory', taken: false}, {name: 'Mentat', taken: false}, {name: 'Rally Troops', taken: false}, {name: 'Swordmaster', taken: false}, {name: 'Sell Melange', taken: false}, {name: 'Secure Contract', taken: false}, {name: 'Conspire', taken: false}, {name: 'Wealth', taken: false}, {name: 'Heighliner', taken: false}, {name: 'Foldspace', taken: false}, {name: 'SelectiveBreeding', taken: false}, {name: 'Secrets', taken: false}, {name: 'Hardy Warriors', taken: false}, {name: 'Stillsuits', taken: false}, {name: 'Sietch Tabr', taken: false}, {name: 'Research Station', taken: false}, {name: 'Carthag', taken: false}, {name: 'Arrakeen', taken: false}, {name: 'The Great Flat', taken: false}, {name: 'Hagga Basin', taken: true}, {name: 'Imperial Basin', taken: false}]
        };
        const game = await addGame(gameData);
        navigate(`/game/${game._id}`);
    }

    const length = leaders.length;

    function prevCard(){
        setSelectedIndex(selectedIndex === 0 ? length - 1 : selectedIndex - 1);
    }

    function nextCard() {
        setSelectedIndex(selectedIndex === length - 1 ? 0 : selectedIndex + 1);
    }

    if (page === 1) {
        return (
            <div className="modal">
                <h1>CHOOSE YOUR LEADER</h1>
                <ul className="profile-list">
                    {leaders.map((l, index) => <LeaderProfileCard leader={l} index={index} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>)}
                </ul>
                <ul className="leaders-list">
                    <IconContext.Provider value={{ size: "5vmin" }}>
                        <div className="leaderButtons">
                            <BsFillArrowLeftCircleFill className="leftButton" onClick={prevCard}/> 
                            <BsFillArrowRightCircleFill className="rightButton" onClick={nextCard}/>
                        </div>
                    </IconContext.Provider>
                    {leaders.map((l, index) => <LeaderCard selectedIndex={selectedIndex} leader={l} index={index}/>)}
                </ul>
                <ul className="colorPicker">
                    <li><div className={color === 'red' ? 'colorActive' : ''} onClick={() => setColor('red')} style={{backgroundColor: 'red'}}></div></li>
                    <li><div className={color === 'blue' ? 'colorActive' : ''} onClick={() => setColor('blue')} style={{backgroundColor: 'blue'}}></div></li>
                    <li><div className={color === 'green' ? 'colorActive' : ''} onClick={() => setColor('green')} style={{backgroundColor: 'green'}}></div></li>
                    <li><div className={color === 'orange' ? 'colorActive' : ''} onClick={() => setColor('orange')} style={{backgroundColor: 'orange'}}></div></li>
                </ul>
                <button className="nextPageButton" onClick={() => setPage(page+1)}>NEXT</button>
            </div>
        )
    }

    if (page === 2) {
        return (
            <div className="modal">
                <h1>WHO ARE YOUR TWO RIVALS?</h1>
                <ul className="profile-list" id="rivals-list">
                    {/* leaders cant be paul or ariana or the leader already chosen by player */}
                    {leaders.filter((l) => l.name !== leaders[selectedIndex].name && l.name !== 'Paul Atreides' && l.name !== 'Countess Ariana Thorvald').map((l, index) => <RivalProfileCard leader={l} index={index} rival1={rival1} setRival1={setRival1} rival2={rival2} setRival2={setRival2}/>)}
                </ul>
                <button className="previousPageButton" onClick={() => setPage(page-1)}>PREVIOUS</button>
                <input type="text" value={gameName} onChange={(e) => setGameName(e.target.value)}/>
                <button className="startGame" onClick={handleGameStart}>START GAME</button>
            </div>
        )
    }
}