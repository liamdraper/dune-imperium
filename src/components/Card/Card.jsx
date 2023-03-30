import "./Card.css";
import Jessica from "../../card-images/Jessica.png";

export default function Card({card}) {
    return (
        <li className="card">
            <div className={"name"}><h3>{card.name.toUpperCase()}</h3></div>
            <div className={"persuassion"}><span>3</span></div>
            <img src={Jessica} alt="" />
            <div></div>
            <div className="agent"><p>If you have another Bene Gesserit card in play gain 2</p></div>
            <div className="reveal"><p>Gain 1 persuassion and 2 strength</p></div>
        </li>
    )
}