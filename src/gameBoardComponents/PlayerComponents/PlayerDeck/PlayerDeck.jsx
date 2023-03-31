import "./PlayerDeck.css";
import { useState, useEffect } from "react";
import DeckModal from "../../../components/DeckModal/DeckModal";
import Card from "../../../components/Card/Card";

export default function PlayerDeck({game, player, setAvailSpaces}) {
    const [showModal, setShowModal] = useState('none');

    return (
        <>
            {/* <DeckModal showModal={showModal} setShowModal={setShowModal}/> */}
            <div style={{display:showModal}} className="deck-modal">
                <button onClick={() => setShowModal('none')}>X</button>
                <ul>{player.deck.map((card, index) => <Card key={index} card={card} game={game} setAvailSpaces={setAvailSpaces}/>)}</ul>
            </div>
            <button onClick={() => setShowModal('inline')} className="hand">Open</button>
            <div className="deck">Deck</div>
        </>
    )
}