import {Route,Routes} from "react-router-dom";
import {Arena, Home} from "../../pages/pages.ts";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/arena" element={<Arena/>}/>
        </Routes>
    );
};

export default Routing;
