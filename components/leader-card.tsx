import { Card, Row, Col, Typography } from 'antd';

const { Text, Title } = Typography;

const LeaderCard = () => {
    return(
        <Card title="Лидер соревнования"
              bordered={false}>

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
    );
};

export default LeaderCard;