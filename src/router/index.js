import {Route,Routes} from "react-router-dom";
import routerConfig from "./router-config";

function RouterComponent() {
    return (
        <Routes>
            {
                routerConfig.map((item) => {
                    return <Route path={item.path} element={item.element} key={item.path}/>
                })
            }
        </Routes>
    )
}

export default RouterComponent