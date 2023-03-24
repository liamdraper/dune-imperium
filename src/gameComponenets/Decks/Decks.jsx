import IntrigueCards from "./IntrigueCards/IntrigueCards";
import ImperiumRowCards from "./ImperiumRowCards/ImperiumRowCards";
import ReserveCards from "./ReserveCards/ReserveCards";
import "./Decks.css";

export default function Decks() {
    return (
        <>
            <div className={"decks"}>
                <h2>Decks</h2>
                <IntrigueCards />
                <ImperiumRowCards />
                <ReserveCards />
            </div>
        </>
    )
}