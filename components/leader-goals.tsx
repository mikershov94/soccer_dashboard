import { Card, Typography } from 'antd';

const { Text } = Typography;

const LeaderGoals = () => {
    return(
        <Card title="Голов"
              bordered={false}>
            <Text>
                <div>Сыграно: 0</div>
                <div>Выиграно: 0</div>
                <div>Проиграно: 0</div>
                <div>Ничья: 0</div>
            </Text>
        </Card>
    );
};

export default LeaderGoals;