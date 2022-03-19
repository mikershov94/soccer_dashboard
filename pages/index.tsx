import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Layout, Menu, Row, Col, Card, Typography, Divider } from 'antd';
import { GlobalOutlined, UserOutlined } from '@ant-design/icons';

import "antd/dist/antd.css";
import styleHeader from '../styles/team.module.sass';
import styles from '../styles/home.module.sass';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

const Home: NextPage = () => {
    return(
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Header className={styleHeader.header}>
                    <Link href='/'>
                        <GlobalOutlined className={styleHeader.logo} />
                    </Link>
                    <div>
                        <h1>Soccer Dashboard</h1>
                    </div>
                </Header>
                <Layout>
                    <Sider>
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
                    </Sider>
                    <Content className={styles.container}>
                        <Row>
                            <Col span={16}>
                                <Row justify='space-around'>
                                    <Col span={23} >
                                        <div className={styles.cardWrapper}>
                                            <Card title="Лидер соревнования"
                                                  bordered={false}
                                                  >
                                                <Row justify='space-around'
                                                     align='middle'>
                                                    <Col>
                                                        <Title level={3}>Uventus</Title>
                                                    </Col>
                                                    <Col>
                                                        <Text>
                                                            <div>Сыграно: 0</div>
                                                            <div>Выиграно: 0</div>
                                                            <div>Проиграно: 0</div>
                                                            <div>Ничья: 0</div>
                                                        </Text>
                                                    </Col>
                                                    <Col>
                                                        <Text>
                                                            <div>Очков: 0</div>
                                                            <div>Голов: 0</div>
                                                            <div>Пропущено: 0</div>
                                                            <div>Разница: 0</div>
                                                        </Text>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                                <Row justify='space-around'>
                                    <Col span={11}>
                                        <div className={styles.cardWrapper}>
                                            <Card title="Голов"
                                                  bordered={false}
                                                  >
                                                <Text>
                                                    <div>Сыграно: 0</div>
                                                    <div>Выиграно: 0</div>
                                                    <div>Проиграно: 0</div>
                                                    <div>Ничья: 0</div>
                                                </Text>
                                            </Card>
                                        </div>
                                    </Col>
                                    <Col span={11}>
                                        <div className={styles.cardWrapper}>
                                            <Card title="Ударов"
                                                  bordered={false}
                                                  >
                                                <Text>
                                                    <div>Очков: 0</div>
                                                    <div>Голов: 0</div>
                                                    <div>Пропущено: 0</div>
                                                    <div>Разница: 0</div>
                                                </Text>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                                <Row justify='space-around'>
                                    <Col span={23}>
                                        <div className={styles.cardWrapper}>
                                            <Card title="Сегодня"
                                                  bordered={false}
                                                  >

                                                <Row justify='space-around'
                                                     align='middle'>
                                                    <Col>
                                                        <div className={styles.infoPlayTeamA}>
                                                            <Title level={4}>Команда А</Title>
                                                            <div>Страна</div>
                                                        </div>
                                                    </Col>
                                                    <Col>00:00</Col>
                                                    <Col>
                                                        <div className={styles.infoPlayTeamB}>
                                                            <Title level={4}>Команда Б</Title>
                                                            <div>Страна</div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Divider></Divider>
                                                <Row justify='space-around'
                                                     align='middle'>
                                                    <Col>
                                                        <div className={styles.infoPlayTeamA}>
                                                            <Title level={4}>Команда А</Title>
                                                            <div>Страна</div>
                                                        </div>
                                                    </Col>
                                                    <Col>00:00</Col>
                                                    <Col>
                                                        <div className={styles.infoPlayTeamB}>
                                                            <Title level={4}>Команда Б</Title>
                                                            <div>Страна</div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Divider></Divider>
                                                <Row justify='space-around'
                                                     align='middle'>
                                                    <Col>
                                                        <div className={styles.infoPlayTeamA}>
                                                            <Title level={4}>Команда А</Title>
                                                            <div>Страна</div>
                                                        </div>
                                                    </Col>
                                                    <Col>00:00</Col>
                                                    <Col>
                                                        <div className={styles.infoPlayTeamB}>
                                                            <Title level={4}>Команда Б</Title>
                                                            <div>Страна</div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                                <Row justify='space-around'>
                                    <Col span={23}>
                                        <div className={styles.cardWrapper}>
                                            <Card title="Завтра"
                                                  bordered={false}
                                                  >
                                                <Row justify='space-around'
                                                     align='middle'>
                                                    <Col>
                                                        <div className={styles.infoPlayTeamA}>
                                                            <Title level={4}>Команда А</Title>
                                                            <div>Страна</div>
                                                        </div>
                                                    </Col>
                                                    <Col>0 : 0</Col>
                                                    <Col>
                                                        <div className={styles.infoPlayTeamB}>
                                                            <Title level={4}>Команда Б</Title>
                                                            <div>Страна</div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Divider></Divider>
                                                <Row justify='space-around'
                                                     align='middle'>
                                                    <Col>
                                                        <div className={styles.infoPlayTeamA}>
                                                            <Title level={4}>Команда А</Title>
                                                            <div>Страна</div>
                                                        </div>
                                                    </Col>
                                                    <Col>0 : 0</Col>
                                                    <Col>
                                                        <div className={styles.infoPlayTeamB}>
                                                            <Title level={4}>Команда Б</Title>
                                                            <div>Страна</div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Divider></Divider>
                                                <Row justify='space-around'
                                                     align='middle'>
                                                    <Col>
                                                        <div className={styles.infoPlayTeamA}>
                                                            <Title level={4}>Команда А</Title>
                                                            <div>Страна</div>
                                                        </div>
                                                    </Col>
                                                    <Col>0 : 0</Col>
                                                    <Col>
                                                        <div className={styles.infoPlayTeamB}>
                                                            <Title level={4}>Команда Б</Title>
                                                            <div>Страна</div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={8}>
                                <div className={styles.cardWrapper}>
                                    <Card title="Вчера"
                                          bordered={false}
                                          >
                                        <Row justify='space-around'
                                                     align='middle'>
                                            <Col>
                                                <div className={styles.infoPlayTeamA}>
                                                    <Title level={5}>Команда А</Title>
                                                    <div>Страна</div>
                                                </div>
                                            </Col>
                                            <Col>0 : 0</Col>
                                            <Col>
                                                <div className={styles.infoPlayTeamB}>
                                                    <Title level={5}>Команда Б</Title>
                                                    <div>Страна</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </div>
                                <div className={styles.cardWrapper}>
                                    <Card title="Вчера"
                                          bordered={false}
                                          >
                                        <Row justify='space-around'
                                                     align='middle'>
                                            <Col>
                                                <div className={styles.infoPlayTeamA}>
                                                    <Title level={5}>Команда А</Title>
                                                    <div>Страна</div>
                                                </div>
                                            </Col>
                                            <Col>0 : 0</Col>
                                            <Col>
                                                <div className={styles.infoPlayTeamB}>
                                                    <Title level={5}>Команда Б</Title>
                                                    <div>Страна</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </div>
                                <div className={styles.cardWrapper}>
                                    <Card title="Вчера"
                                          bordered={false}
                                          >
                                        <Row justify='space-around'
                                                     align='middle'>
                                            <Col>
                                                <div className={styles.infoPlayTeamA}>
                                                    <Title level={5}>Команда А</Title>
                                                    <div>Страна</div>
                                                </div>
                                            </Col>
                                            <Col>0 : 0</Col>
                                            <Col>
                                                <div className={styles.infoPlayTeamB}>
                                                    <Title level={5}>Команда Б</Title>
                                                    <div>Страна</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </div>
                                <div className={styles.cardWrapper}>
                                    <Card title="Вчера"
                                          bordered={false}
                                          >
                                        <Row justify='space-around'
                                                     align='middle'>
                                            <Col>
                                                <div className={styles.infoPlayTeamA}>
                                                    <Title level={5}>Команда А</Title>
                                                    <div>Страна</div>
                                                </div>
                                            </Col>
                                            <Col>0 : 0</Col>
                                            <Col>
                                                <div className={styles.infoPlayTeamB}>
                                                    <Title level={5}>Команда Б</Title>
                                                    <div>Страна</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        </>
    );
}

export default Home;