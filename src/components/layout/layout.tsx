import {FC, ReactNode} from "react";
import Footer from "../common/footer/footer.tsx";
import Header from "../common/header/header.tsx";
import Main from "../common/main/main.tsx";

type TLayoutProps = {
    children: ReactNode | ReactNode[];
}

const Layout: FC<TLayoutProps> = ({children}) => {
    return (
        <div className={'grid grid-rows-[80px,auto,80px] grid-cols-1 min-h-[100vh]'}>
            <Header/>
            <Main>
                {children}
            </Main>
            <Footer/>

        </div>
    );
};

export default Layout;
