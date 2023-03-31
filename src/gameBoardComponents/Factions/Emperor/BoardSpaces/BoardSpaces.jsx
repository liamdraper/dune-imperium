import Conspire from "./Conspire/Conspire";
import Wealth from "./Wealth/Wealth";

export default function BoardSpaces() {
    return (
        <>
            <div className="board-spaces">
                <Conspire />
                <Wealth />
            </div>
        </>
    )
}