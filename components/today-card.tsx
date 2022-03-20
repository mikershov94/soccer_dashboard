import { Typography, Divider, Card, Row, Col } from "antd";

import styles from '../styles/today-card.module.sass';

const { Title } = Typography;

const TodayCard = () => {
    return(
        <Card title="Сегодня"
              bordered={false}>

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
    );
};

export default TodayCard;