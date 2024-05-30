import TotalStat from "../components/total-stat/total-stat.tsx";
import Players from "../components/players/players.tsx";
import PlayButton from "../components/ui/button/play-button.tsx";

const Arena = () => {
    return (
        <div className={"flex flex-col gap-[16px]"}>
            <TotalStat/>
            <Players/>
            <PlayButton/>
        </div>
    );
};

export default Arena;
