import { ReactElement } from "react";
import Link from 'next/link';
import { Layout, Menu, Row, Col, Card, Typography, Divider } from 'antd';
import { GlobalOutlined, UserOutlined } from '@ant-design/icons';

import SideMenu from "./side-menu";

import teamStyles from '../styles/team.module.sass';
import homeStyles from '../styles/home.module.sass';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

interface MainLayoutWithoutProps {
    children: ReactElement
}

const MainLayout = ({ children }: MainLayoutWithoutProps) => {
    return(
        <Layout>
            <Header className={teamStyles.header}>
            <Link href='/'>
                <GlobalOutlined className={teamStyles.logo} />
            </Link>
            <div>
                <h1>Soccer Dashboard</h1>
            </div>
            </Header>
            <Layout>
                <Sider>
                    <SideMenu />
                </Sider>
                <Content>{children}</Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;