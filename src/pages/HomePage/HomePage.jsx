import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <h1>Home</h1>
            <ul>
                <li><Link to="/newGame">New Game</Link></li>
                <li><Link to="/loadGame">Load Game</Link></li>
            </ul>
        </>
    )
}