import * as gamesAPI from '../../utilities/games-api';
import * as playersAPI from '../../utilities/players-api';

export default function GameMenu({game, player}) {

    const savedGame = game;

    async function handleSave() {
        const game = await gamesAPI.saveGame(savedGame);
    }

    function handleExit() {

    }

    return(
        <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleExit}>Save & Exit Game</button>
        </>
    )
}