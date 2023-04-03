import * as gamesAPI from "../../utilities/games-api";
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function GameDetails({game, index, selectedIndex, setSelectedIndex}) {

    const navigate = useNavigate();

    async function deleteGame() {
        const id = await game._id
        gamesAPI.deleteGame(id);
        navigate('/loadGame');
        setSelectedIndex(0);
    }

    const classes = classNames('loadGameModal', `${index === selectedIndex ? 'activeModal' : ''}`)

    return (
        <>
            <div className={classes}>
                <h1>{game.name}</h1>
                <button onClick={deleteGame}>DELETE</button>
            </div>
        </>
    )
}