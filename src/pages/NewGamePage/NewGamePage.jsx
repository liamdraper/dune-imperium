import "./NewGamePage.css";
import { leaders } from "../../card-data";
import { starterDeck } from "../../card-data";
import { conflictDeck } from "../../card-data";
import LeaderProfileCard from "../../components/LeaderProfileCard/LeaderProfileCard";
import LeaderCard from "../../components/Modal/LeaderCard/LeaderCard";
import { useState } from "react";
import { addGame } from "../../utilities/games-api";
import { addPlayer } from "../../utilities/players-api";
import { Link, useNavigate } from 'react-router-dom';
// import profileLeader from "../../card-images/Paul Atreides-headshot.png";
import { IconContext } from "react-icons";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function NewGamePage() {

    const [page, setPage] = useState(1);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [leaderProfile, setLeaderProfile] = useState("");
    const [color, setColor] = useState('red');
    const navigate = useNavigate();

    // console.log(leaders[0])
    // const leaderProfileImg = require(`../../card-images/${leaders[].name}-headshot.png`);s

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
            name:'Game 1', 
            turn: 1, 
            player: player._id, 
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
                            <BsFillArrowRightCircleFill onClick={nextCard}/>
                        </div>
                    </IconContext.Provider>
                    {leaders.map((l, index) => <LeaderCard selectedIndex={selectedIndex} leader={l} index={index}/>)}
                </ul>
                <ul className="colorPicker">
                    <li><div onClick={() => setColor('red')} style={{backgroundColor: 'red'}}></div></li>
                    <li><div onClick={() => setColor('blue')} style={{backgroundColor: 'blue'}}></div></li>
                    <li><div onClick={() => setColor('green')} style={{backgroundColor: 'green'}}></div></li>
                    <li><div onClick={() => setColor('orange')} style={{backgroundColor: 'orange'}}></div></li>
                </ul>
                <button className="nextPageButton" onClick={() => setPage(page+1)}>NEXT</button>
            </div>
        )
    }

    if (page === 2) {
        return (
            <div className="modal">
                <h1>Pick two rivals</h1>
                <button onClick={() => setPage(page-1)}>Previous</button>
                <Link onClick={handleGameStart}>Start game</Link>
            </div>
        )
    }

}