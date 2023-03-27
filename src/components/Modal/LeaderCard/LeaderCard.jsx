import "./LeaderCard.css";

export default function LeaderCard({ leader, setLeaderPick }) {

    return(
        <li class="leader-card">
            <h3>{ leader.name }</h3>
            <button onClick={(e) => setLeaderPick(leader)}>Select</button>
        </li>
    )
}