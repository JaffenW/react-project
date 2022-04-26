import logo from '../logo.svg';
import './header.css'
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom'

function Header(props) {
    const navigate = useNavigate()

    const selectDefault = () => {
        navigate('/default')
        // this.props.history.push('/default')
    }

    const selectAbout = () => {
        navigate('/about')
    }

    const selectProfiler = () => {
        navigate('/profiler')
    }

    return (
        <div className="container">
            <img src={logo} style={{ height: '8vh' }} alt="logo" />
            <Menu mode="horizontal">
                <Menu.SubMenu key="SubMenu" title="设置">
                    <Menu.Item key="one" onClick={selectDefault}>
                        默认
                    </Menu.Item>
                    <Menu.Item key="two" onClick={selectAbout}>
                        关于
                    </Menu.Item>
                    <Menu.Item key="three" onClick={selectProfiler}>
                        我的
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </div>
    )
}

export default Header;
