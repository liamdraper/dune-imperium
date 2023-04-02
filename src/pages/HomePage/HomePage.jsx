import { Link } from 'react-router-dom';
import "./HomePage.css";

export default function HomePage() {
    return (
        <>
            <section className="title">
                <h1>D U N E<br></br><span>I M P e R I U M</span></h1>
                <ul>
                    <li><Link to="/newGame">New Game</Link></li>
                    <li><Link to="/loadGame">Load Game</Link></li>
                </ul>
            </section>
        </>
    )
}