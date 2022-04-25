import logo from '../logo.svg';
import './header.css'
import { Menu } from 'antd';

function Header(props) {
    const selectDefault = () => {
        this.props.history.push('/default')
    }

    const selectAbout = () => {
        props.history.push('/about')
    }

    const selectProfiler = () => {
        props.history.push('/profiler')
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
