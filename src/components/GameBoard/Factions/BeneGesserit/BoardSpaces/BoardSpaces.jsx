import SelectiveBreeding from "./SelectiveBreeding/SelectiveBreeding";
import Secrets from "./Secrets/Secrets";

export default function BoardSpaces() {
    return (
        <>
            <div className="boardSpaces">
                <SelectiveBreeding />
                <Secrets />
            </div>
        </>
    )
}