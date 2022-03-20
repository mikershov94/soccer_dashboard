import { Typography, Row, Col, Card } from 'antd';

const { Text } = Typography;

const PlayerList = () => {
    return(
        <Card title="Список игроков">
            <Row justify='space-around'
                 align='middle'>
                <Col>
                    <Text>Иванов Иван Иванович</Text>
                </Col>
                <Col>
                    <Text> - </Text>
                </Col>
                <Col>
                    <Text>Номер 11</Text>
                </Col>
            </Row>

            <Row justify='space-around'
                 align='middle'>
                <Col>
                    <Text>Иванов Иван Иванович</Text>
                </Col>
                <Col>
                    <Text> - </Text>
                </Col>
                <Col>
                    <Text>Номер 11</Text>
                </Col>
            </Row>

            <Row justify='space-around'
                 align='middle'>
                <Col>
                    <Text>Иванов Иван Иванович</Text>
                </Col>
                <Col>
                    <Text> - </Text>
                </Col>
                <Col>
                    <Text>Номер 11</Text>
                </Col>
            </Row>
        </Card>
    );
};

export default PlayerList;