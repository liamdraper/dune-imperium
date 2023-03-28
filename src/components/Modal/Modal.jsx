import "./Modal.css";
import { leaders } from "../../card-data";
import { starterDeck } from "../../card-data";
import LeaderCard from "./LeaderCard/LeaderCard";
import { useState, useRef } from "react";
import { addGame } from "../../utilities/games-api";
import { addPlayer } from "../../utilities/players-api";

export default function Modal( { gameRef }) {

    const [page, setPage] = useState(1);
    const [leaderPick, setLeaderPick] = useState(null);
    const modalRef = useRef();

    async function handleGameStart() {
        // // Send fetch request to server to add game and player documents to the databsase
        const gameData = {name:'Game 1', turn: 1};
        const game = await addGame(gameData);
        gameRef.current = game;
        // const playerData = {
        //     leader: leaderPick,
        //     color: 'red',
        //     victoryPoints: 0,
        //     spice: 0,
        //     water: 1,
        //     solari: 0,
        //     agent: 2,
        //     unit: 2,
        //     persuassion: 0,
        //     hand: [],
        //     deck: [starterDeck[0], starterDeck[0], starterDeck[1], starterDeck[1], starterDeck[2], starterDeck[2], starterDeck[3], starterDeck[4], starterDeck[5], starterDeck[6]]
        // }
        // const player = await addPlayer(playerData);
        modalRef.current.style.display = "none";
    }
    
    // const playerSchema = new Schema({
    //     // userName: { type: Schema.Types.ObjectId, ref: 'User'},
    //     leader: {type: Object},
    //     victoryPoints: {type: Number, default: 0},
    //     spice: {type: Number, default: 0},
    //     water: {type: Number, default: 1},
    //     solari: {type: Number, default: 0},
    //     agent: {type: Number, default: 2},
    //     unit: {type: Number, default: 2},
    //     persuassion: {type: Number, default: 0},
    // })

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
            <div ref={modalRef} className="modal">
                <h1>Pick two rivals</h1>
                <section><button onClick={() => setPage(page-1)}></button>Page:{page}<button onClick={() => setPage(page+1)}></button></section>
                <button onClick={handleGameStart}>Start game</button>
            </div>
        )
    }

}