import Heighliner from "./Heighliner/Heighliner";
import Foldspace from "./Foldspace/Foldspace";

export default function BoardSpaces() {
    return (
        <>
            <div className="boardSpaces">
                <Heighliner />
                <Foldspace />
            </div>
        </>
    )
}