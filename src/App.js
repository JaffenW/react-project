import Header from "./pages/header";
import 'antd/dist/antd.css'
import Default from "./pages/default";
import About from "./pages/about";
import Profiler from "./pages/profiler";
import { Route,Routes } from "react-router-dom"

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
        <div style={{ height: '10vh', boxShadow: '1px 1px 1px gray'}}>
            <Header props/>
        </div>
        <Routes>
            <Route path="/" element={Default} />
            <Route path="/about" element={About} />
            <Route path="/profiler" element={Profiler} />
        </Routes>
    </div>
  );
}

export default App;
