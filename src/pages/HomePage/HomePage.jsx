import { Link } from 'react-router-dom';
import "./HomePage.css";

export default function HomePage() {
    return (
        <>
            <h1>Dune Imeperium</h1>
            <ul>
                <li><Link to="/newGame">New Game</Link></li>
                <li><Link to="/loadGame">Load Game</Link></li>
            </ul>
        </>
    )
}