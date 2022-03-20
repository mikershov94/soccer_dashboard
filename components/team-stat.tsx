import { Typography, Row, Col, Card } from "antd";

const { Text } = Typography;

const TeamStat = () => {
    return(
        <Card title="Статистика"
              bordered={false}>
            
            <Row justify='space-around'
                 align='middle'>
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
    );
};

export default TeamStat;