import {FC} from "react";

type TCustomButton = {
    onClick: () => void,
    title: string
}
const RedButton: FC<TCustomButton> = ({title, onClick}) => {
    return (
        <button onClick={onClick} className={"bg-[#D92525] text-[#FFFFFF] w-[240px] h-[60px] rounded-lg self-center"}>
            {title}
        </button>
    );
};

export default RedButton;
