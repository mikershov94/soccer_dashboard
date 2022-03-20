import Link from 'next/link';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const SideMenu = () => {

    return(
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>               
            <Menu.Item key="1" icon={<UserOutlined />}>
                <Link href='/teams/team'>
                    Команда 1
                </Link>
            </Menu.Item>              
            <Menu.Item key="2" icon={<UserOutlined />}>
                <Link href='/teams/team'>
                    Команда 2
                </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
                <Link href='/teams/team'>
                    Команда 3
                </Link>
            </Menu.Item>                
        </Menu>
    );
};

export default SideMenu;