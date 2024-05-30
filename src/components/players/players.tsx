import PlayerMiniCard, {TPlayer} from "../player-mini-card/player-mini-card.tsx";

const Players = () => {
    const player1: TPlayer = {
        id: 123,
        name: "Чак Норрис",
        deposit: 100500,
        stats: {
            leaderboardPosition: 1,
            level: 999,
            win: 100,
            lose: 1,
            draw: 1
        }

    }
    const player2 = null
    return (
        <div className="flex flex-row relative gap-[20px]">
            <PlayerMiniCard player={player1} alignItems={"items-center"}/>
            <PlayerMiniCard player={null} alignItems={"items-center"}/>
            {
                player2 &&
                <div className={"absolute top-[50%] left-[50%] leading-none translate-x-[-50%] translate-y-[-50%]"}>vs</div>
            }
        </div>
    );
};

export default Players;
