import "./LeaderCard.css";
import { useState, useRef, useEffect } from "react";
import classNames from 'classnames';
import Leader from "../../../card-images/leader.png";

export default function LeaderCard({ leader, index, selectedIndex}) {

    const [selected, setSelected] = useState(false);
    const [leaderImg, setLeaderImg] = useState('');
    const node = useRef();
    const liClasses = classNames('leader-card', `${index === selectedIndex ? 'active' : ''}`);
    
    useEffect(() => {
        async function getImg() {
            const img = await require(`../../../card-images/${leader.name}.png`);
            setLeaderImg(img);
        }
        getImg();
    }, [])

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
            <div className="leader-name">{leader.name}</div>
            <div className="leader-house">{leader.house}</div>
            <img src={leaderImg} alt="" />
            <div className={"abilities"}>
                <div className={"leader-ability"}>
                    <h5>{leader.leaderAbility.name}</h5>
                    <p></p>
                </div>
                <div className={"ring-ability"}>
                    <h5>{leader.signetRingAbility.name}</h5>
                    <p></p>
                </div>
            </div>
        </li>
    )
}