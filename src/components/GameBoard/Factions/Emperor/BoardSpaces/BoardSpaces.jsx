import Conspire from "./Conspire/Conspire";
import Wealth from "./Wealth/Wealth";
import "./BoardSpaces.css";

export default function BoardSpaces() {
    return (
        <>
            <div className="boardSpaces">
                <Conspire />
                <Wealth />
            </div>
        </>
    )
}