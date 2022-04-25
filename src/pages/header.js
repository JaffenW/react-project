import logo from '../logo.svg';
import './header.css'
import { Menu } from 'antd';
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div className="container">
            <img src={logo} style={{ height: '8vh' }} alt="logo" />
            <Menu mode="horizontal">
                <Menu.SubMenu key="SubMenu" title="设置">
                    <Menu.Item key="one">
                        1
                    </Menu.Item>
                    <Menu.Item key="two">
                        2
                    </Menu.Item>
                    <Menu.Item key="three">
                        3
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </div>
    )
}

export default Header;
