import "./Conspire.css";
import { useState } from "react";

export default function Conspire() {

    const [taken, setTaken] = useState(false);

    return (
        <>
            <div className="boardSpace">
                <div onClick={() => setTaken(!taken)} className="agentSpace" style={{backgroundColor: taken ? 'blue' : 'rgb(84, 84, 84)'}}></div>
                <div className="spaceRewards"></div>
            </div>
        </>
    )
}