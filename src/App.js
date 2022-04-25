import Header from "./pages/header";
import 'antd/dist/antd.css'
import Main from "./pages/main";
import { Route,Routes,Link } from "react-router-dom"

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
        <div style={{ height: '10vh', boxShadow: '1px 1px 1px gray'}}>
            <Header />
        </div>
        {/*<div style={{ padding: '10vw' }}>*/}
        {/*    */}
        {/*</div>*/}
        <Routes>
            <Route path="/" element={Main} />
            <Route path="/main" element={Main} />
        </Routes>
    </div>
  );
}

export default App;
