import Header from "./pages/header";
import 'antd/dist/antd.css'
import RouterComponent from "./router"

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
        <div style={{ height: '10vh', boxShadow: '1px 1px 1px gray'}}>
            <Header props/>
        </div>
        <RouterComponent/>
    </div>
  );
}

export default App;
