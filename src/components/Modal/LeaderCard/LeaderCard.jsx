import "./LeaderCard.css";
import { useState } from "react";

export default function LeaderCard({ leader, setLeaderPick }) {

    const [selected, setSelected] = useState('white');

    function handleClick() {
        setLeaderPick(leader);
        // Set background color of li to blue
        const cardEls = document.querySelectorAll('.leaders-list > li');
        cardEls.forEach((c) => setSelected('white'));
        setSelected('#03d3fc');
    }

    return(
        <li style={{backgroundColor: selected}} class="leader-card">
            <h3>{ leader.name }</h3>
            <button onClick={handleClick}>Select</button>
        </li>
    )
}