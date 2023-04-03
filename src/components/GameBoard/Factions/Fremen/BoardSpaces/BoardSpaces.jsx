import HardyWarriors from "./HardyWarriors/HardyWarriors";
import Stillsuits from "./Stillsuits/Stillsuits";

export default function BoardSpaces() {
    return (
        <>
            <div className="boardSpaces">
                <HardyWarriors />
                <Stillsuits />
            </div>
        </>
    )
}