import {Route} from "react-router-dom";
import routerConfig from "./router-config";
import { Routes } from "react-router-dom"

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