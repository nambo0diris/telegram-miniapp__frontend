import {FC, ReactNode} from "react";

type TMainProps = {
    children?: ReactNode;
}
const Main: FC<TMainProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Main;
