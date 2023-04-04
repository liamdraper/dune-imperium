import "./Card.css";
import { useRef, useState, useEffect } from "react";
import classNames from 'classnames';
export default function Card({ card }) {

    const [highlighted, setHighlighted] = useState(false);
    const [img, setImg] = useState('');
    const node = useRef();
    const liClasses = classNames('card', `${highlighted ? 'active' : 'inactive'}`);

    useEffect(() => {
        async function getImg() {
            const img = await require(`../../card-images/${card.name}.png`);
            setImg(img);
        }
        getImg();
    }, [])

    function handleClick(e) {
        if (node.current.contains(e.target)) {
            return;
        }
        setHighlighted(false);
    }

    function handleClickCard() {
        setHighlighted(true)
    }
    
    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [])
    
    return (
        <li ref={node} className={liClasses} onClick={handleClickCard}>
            <div className={"name"}><h3>{card.name.toUpperCase()}</h3></div>
            <div className={"persuassion"}><span>3</span></div>
            <img src={img} alt="" />
            <div></div>
            <div className="agent"><p>If you have another Bene Gesserit card in play gain 2</p></div>
            <div className="reveal"><p>Gain 1 persuassion and 2 strength</p></div>
        </li>
    )
}