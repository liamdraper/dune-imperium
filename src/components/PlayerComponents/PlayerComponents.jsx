import "./PlayerComponents.css";
import Card from "../Card/Card";
import { useState } from "react";
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";

export default function PlayerComponents( {player, setPlayer, game}) {

    const [showModal, setShowModal] = useState('none');

    function handleClick() {
        console.log('game: ', game)
        const asdf = player;
        console.log(asdf);
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
                <div style={{display:showModal}} className="deck-modal">
                    <button onClick={() => setShowModal('none')}>X</button>
                    <ul>{player.deck.map((card, index) => <Card key={index} card={card} game={game}/>)}</ul>
                </div>
            </div>
        </>
    )
}