import "./NewGamePage.css";
import { leaders } from "../../card-data";
import { starterDeck } from "../../card-data";
import { conflictDeck } from "../../card-data";
import LeaderCard from "../../components/Modal/LeaderCard/LeaderCard";
import { useState } from "react";
import { addGame } from "../../utilities/games-api";
import { addPlayer } from "../../utilities/players-api";
import { Link, useNavigate } from 'react-router-dom';

export default function NewGamePage() {

    const [page, setPage] = useState(1);
    const [leaderPick, setLeaderPick] = useState(leaders[0]);
    const navigate = useNavigate();

    async function handleGameStart() {
        const playerData = {
            leader: leaderPick,
            color: 'green',
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
            turn: 1.0, 
            player: player._id, 
            conflictDeck: 
            [conflictDeck[0]],
            boardLocations: [ {name: 'highCouncil', taken: false}, {name: 'hallOfOratory', taken: false}, {name: 'mentat', taken: false}, {name: 'rallyTroops', taken: false}, {name: 'swordmaster', taken: false}, {name: 'sellMelange', taken: false}, {name: 'secureContract', taken: false}, {name: 'conspire', taken: false}, {name: 'wealth', taken: false}, {name: 'heighliner', taken: false}, {name: 'foldspace', taken: false}, {name: 'selectiveBreeding', taken: false}, {name: 'secrets', taken: false}, {name: 'hardyWarriors', taken: false}, {name: 'stillsuits', taken: false}, {name: 'sietchTabr', taken: false}, {name: 'researchStation', taken: false}, {name: 'carthag', taken: false}, {name: 'arrakeen', taken: false}, {name: 'theGreatFlat', taken: false}, {name: 'haggaBasin', taken: false}, {name: 'imperialBasin', taken: false}]
        };
        const game = await addGame(gameData);
        navigate(`/game/${game._id}`);
    }

    if (page === 1) {
        return (
            <div className="modal">
                <h1>Pick Leader</h1>
                <section><button onClick={() => setPage(page-1)}></button>Page:{page}<button onClick={() => setPage(page+1)}></button></section>
                <ul className="leaders-list">
                    {leaders.map((l) => <LeaderCard setLeaderPick={setLeaderPick} leader={l} key={l}/>)}
                </ul>
                <h1>Pick Color</h1>
                <select>
                    <option>Blue</option>
                    <option>Red</option>
                    <option>Green</option>
                </select>
            </div>
        )
    }
    if (page === 2) {
        return (
            <div className="modal">
                <h1>Pick two rivals</h1>
                <section><button onClick={() => setPage(page-1)}></button>Page:{page}<button onClick={() => setPage(page+1)}></button></section>
                <Link onClick={handleGameStart}>Start game</Link>
            </div>
        )
    }

}