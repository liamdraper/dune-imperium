

export default function ConflictDeck({game}) {
    return (
        <>
            <h2>Conflict Deck</h2>
            <div>{game.conflictDeck[0].name}</div>
        </>
    )
}