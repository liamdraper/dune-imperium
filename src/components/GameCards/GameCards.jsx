import "./GameCards.css";
import Card from "../Card/Card";

import { reserveCards } from "../../card-data";

export default function GameCards() {
    return(
        <>
            <div className="gameCardsGrid">
                <ul>
                    {reserveCards.map((card) => <Card card={card}/>)}
                </ul>
            </div>
        </>
    )
}