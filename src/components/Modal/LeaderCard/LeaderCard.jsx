import "./LeaderCard.css";
import { useState, useRef, useEffect } from "react";
import classNames from 'classnames';
import Leader from "../../../card-images/leader.png";

export default function LeaderCard({ leader, setLeaderPick, index, currentCard }) {

    const [selected, setSelected] = useState(false);
    const node = useRef();
    const liClasses = classNames('leader-card', `${index === currentCard ? 'active' : ''}`);
    console.log(index);

    function handleClick(e) {
        if (node.current.contains(e.target)) {
            return;
        }
        setSelected(false);
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
          };
    }, [])

    return(
        <li ref={node} class={liClasses}>
            <div className="leader-name"><h3>{leader.name}</h3></div>
            <div><h4>{leader.house}</h4></div>
            <img src={Leader} alt="" />
            <div className={"abilities"}>
                <div>
                    <h5>{leader.leaderAbility.name}</h5>
                    <p></p>
                </div>
                <div>
                    <h5>{leader.signetRingAbility.name}</h5>
                    <p></p>
                </div>
            </div>
            <button onClick={() => setSelected(true)}>Select</button>
        </li>
    )
}