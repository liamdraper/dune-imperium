import "./Card.css";
import Jessica from "../../card-images/Jessica.png";
import { useRef, useState, useEffect, useContext } from "react";
import classNames from 'classnames';
export default function Card({game, card, setAvailSpaces}) {

    const [highlighted, setHighlighted] = useState(false);
    const node = useRef();
    const liClasses = classNames('card', `${highlighted ? 'active' : 'inactive'}`);

    function handleClick(e) {
        if (node.current.contains(e.target)) {
            return;
        }
        setHighlighted(false);
        setAvailSpaces([]);
    }

    function handleClickCard() {
        setHighlighted(true)
        // Set available spaces 
        const avail = game.boardLocations.filter((l) => l.taken === false).map((l) => l.name);
        // FInd avaiable spaces that correspond with agent Icons
        console.log(avail);
        console.log(card.boardLocations);
        const boardSpaces = avail.filter((l) => card.boardLocations.includes(l));
        console.log(boardSpaces);
        setAvailSpaces([boardSpaces]);
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
            <img src={Jessica} alt="" />
            <div></div>
            <div className="agent"><p>If you have another Bene Gesserit card in play gain 2</p></div>
            <div className="reveal"><p>Gain 1 persuassion and 2 strength</p></div>
        </li>
    )
}


// function handlePlaceAgent() {
//     const boardEls = document.querySelectorAll('#location');
//     const boardNameEls = document.querySelectorAll('#location-name');
//     console.log(boardNameEls);
//     boardEls.forEach((e) => e.style.borderColor = 'red');
//     const avail = game.boardLocations.filter((l) => l.taken == false);
//     console.log(avail)
//     console.log(boardNameEls[0].textContent);
//     // const availSquares = boardNameEls.filter((el) => avail.includes(el.textContent) )
//     console.log(boardEls, avail);
// }

// function handleClick() {
//     setHighlighted(true);
//     // Find all divs that are "Cities"
//     // const boardNameEls = document.querySelectorAll("#Cities > div > #location")
//     const boardNameEls = document.querySelectorAll(`#${card.agentIcon} > div > #location`);
//     // Find all divs that are not taken already
//     const availBoardLocations = game.boardLocations.filter((l) => l.taken == false);
//     console.log(boardNameEls)
//     console.log(availBoardLocations)
//     const availBoardEls = boardNameEls.filter((el) => el);
//     console.log(availBoardEls);
//     // const availEls = document.querySelectorAll("#location").filter((el) => )
//     // console.log(availEls)
//     // console.log(avail)
//     //Highlight all divs that are avail AND listed in agent Icons

// }

// Problem: When I click on a card, I need to find all componenets that are: not already taken this round AND match the agent icons on my selected cards
// I can already access names of available components from my game object
// 