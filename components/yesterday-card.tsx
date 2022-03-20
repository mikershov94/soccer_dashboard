import { Typography, Row, Col, Card } from "antd";

import styles from '../styles/yesterday-card.module.sass';

const { Title } = Typography;

const YesterdayCard = () => {
    return(
        <Card title="Вчера"
              bordered={false}>
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
    );
};

export default YesterdayCard;