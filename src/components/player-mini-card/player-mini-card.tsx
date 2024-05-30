import {FC} from "react";

export type TPlayer = {
    id: number,
    name: string,
    deposit: number,
    stats: {
        leaderboardPosition: number,
        level: number,
        win: number,
        lose: number,
        draw: number
    }
}

export type TPlayerMiniCard = {
    alignItems: "items-start" | "items-end" | "items-center"
    player: TPlayer | null
}

const PlayerMiniCard:FC<TPlayerMiniCard> = ({player = null, alignItems}) => {
    if(!player){
        return (
            <div className={`flex-1 flex flex-col ${alignItems} justify-center`}>
                ?
            </div>
        )
    }

    return (
        <div className={`flex-1 flex flex-col ${alignItems}`}>
            <div className={'flex flex-row gap-2'}>
                <div>numb</div>
                <div>pic</div>
                <div>name</div>
            </div>
            <div className={'flex flex-col'}>
                <div>Побед: 123</div>
                <div>Поражений: 23</div>
                <div>Ничьи: 12</div>
            </div>
        </div>
    );
};

export default PlayerMiniCard;
