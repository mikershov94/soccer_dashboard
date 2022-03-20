import { ReactElement } from "react";
import Link from 'next/link';
import { Layout } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

import SideMenu from "./side-menu";

import styles from '../styles/main-layout.module.sass';
import "antd/dist/antd.css";

const { Header, Sider, Content } = Layout;

interface MainLayoutWithoutProps {
    children: ReactElement
}

const MainLayout = ({ children }: MainLayoutWithoutProps) => {
    return(
        <Layout>
            <Header className={styles.header}>
            <Link href='/'>
                <GlobalOutlined style={{ fontSize: '30pt', color: '#fafafa' }} />
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