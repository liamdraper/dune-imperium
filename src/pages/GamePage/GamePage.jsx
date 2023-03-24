

export default function GamePage() {
    return (
        <>
            <h1>Game</h1>
            <Decks />
                <IntrigueCards />
                <ImperiumRowCards />
                <ReserveCards />
            <LandsraadCouncil />
                <HighCouncil />
                <HallOfOratory />
                <Mentat />
                <RallyTroops />
                <SwordMaster />
            <CHOAM />
                <SellMelange />
                <SecureContract />
            <Factions />
                <Emperor />
                    <InfluenceTrack />
                    <BoardSpaces />
                <SpacingGuild />
                    <InfluenceTrack />
                    <BoardSpaces />
                <BeneGesserit />
                    <InfluenceTrack />
                    <BoardSpaces />
                <Fremen />
                    <InfluenceTrack />
                    <BoardSpaces />
            <Cities />
            <Deserts />
            <Combat />
            <ScoreTrack />
            <RivalComponenets />
            <PlayerComponenets />
        </>
    )
}