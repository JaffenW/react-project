import logo from '../logo.svg';
import './header.css'
import { Menu, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom'
import { Avatar, Image } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

function Header(props) {
    const navigate = useNavigate()

    const handleMenu = (e) => {
        navigate(e.key)
        console.log(e)
    }

    // const selectDefault = () => {
    //     navigate('/default')
    // }
    //
    // const selectAbout = () => {
    //     navigate('/about')
    // }
    //
    // const selectProfiler = () => {
    //     navigate('/profiler')
    // }

    const menu = <Menu items={[
        {
            label: '我的',
            key: 'profiler',
            icon: <UserOutlined />
        },
        {
            label: '设置',
            key: 'setting',
            icon: <SettingOutlined />
        },
        {
            label: '注销',
            key: 'logout',
            icon: <LogoutOutlined />
        }
    ]}/>

    return (
        <div className="container">
            <img src={logo} className="App-logo" style={{ height: '5vh' }} alt="logo" />
            <div style={{ width: '60vw' }}>
                <Menu mode="horizontal" defaultSelectedKeys={['default']} style={{ width: 'auto'}} onClick={handleMenu}>
                    <Menu.Item key="/default">
                        默认
                    </Menu.Item>
                    <Menu.Item key="/about">
                        关于
                    </Menu.Item>
                    <Menu.Item key="/profiler">
                        我的
                    </Menu.Item>
                </Menu>
            </div>
            <Dropdown overlay={menu} >
                <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
            </Dropdown>
        </div>
    )
}

export default Header;
