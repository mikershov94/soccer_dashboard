import { Typography, Divider, Row, Col, Card } from "antd";

import styles from '../styles/tomorrow-card.module.sass';

const { Title } = Typography;

const TomorrowCard = () => {
    return(
        <Card title="Завтра"
              bordered={false}>
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
    );
};

export default TomorrowCard;