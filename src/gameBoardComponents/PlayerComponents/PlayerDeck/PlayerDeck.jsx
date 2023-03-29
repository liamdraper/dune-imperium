import "./PlayerDeck.css";
import { useState, useEffect } from "react";
import DeckModal from "../../../components/DeckModal/DeckModal";
import Card from "../../../components/Card/Card";

export default function PlayerDeck({player}) {
    const [showModal, setShowModal] = useState('none');


    return (
        <>
            {/* <DeckModal showModal={showModal} setShowModal={setShowModal}/> */}
            <div style={{display:showModal}} className="deck-modal">
                <button onClick={() => setShowModal('none')}>X</button>
                <ul>{player.hand.map((card) => <Card card={card}/>)}</ul>
            </div>
            <button onClick={() => setShowModal('block')} className="hand">Open</button>
            <div className="deck">Deck</div>
        </>
    )
}